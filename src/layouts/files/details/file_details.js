import axios from "axios";
import React, { useEffect, useState } from "react";
import urlServer from "../../../config/const";
import {useParams} from "react-router-dom";
import { FileDoneOutlined } from '@ant-design/icons';
import {Tabs} from "antd";
import FileSteps from "./file-steps";
import FileDocs from "./file_docs";
import FileData from "./file-data";
import FileProducts from "./file-products";
import FileContainers from "./file-containers";
import ModalShow from "./components/modal";
import AlertApp from "../../../components/AntAlert/alert";

const tabsList = (fileId,steps,docs,filesData, call,nextError) => [
    {
        title: "الاكتمال",
        icon: <FileDoneOutlined />,
        count: {value:0,from:0},
        // steps,fileId,currentStep,fileStatus
        element: <FileSteps
            nextError={nextError}
            steps={steps}
            fileId={filesData.id}
            currentStep={filesData.current_step}
            fileStatus={filesData.status} />,
    },
    {
        title: "المستندات الضرورية",
        icon: <FileDoneOutlined />,
        count: {value:0,from:0},
        element: <FileDocs docs={docs} call={call} />,
    },
    {
        title: "التفاصيل",
        icon: <FileDoneOutlined />,
        count: {value:0,from:0},
        element: <FileData fileData={filesData}/>,
    },
    {
        title: "البضاعة",
        icon: <FileDoneOutlined />,
        count: {value:0,from:0},
        element: <FileProducts fileId={fileId}/>,
    },
    {
        title: "الحاويات",
        icon: <FileDoneOutlined />,
        count: {value:0,from:0},
        element: <FileContainers fileId={fileId}/>,
    },
]
// eslint-disable-next-line react/prop-types,no-unused-vars
function FilesDetails({nextError}) {

    const [open, setOpen] = useState({open:false,imgPath:""});
    const [alert, setAlert] = useState({open:false,value:""});
    // let docId

    const [filesData, setFilesData] = useState({
        data:{
            docs:[],
            steps:[]
        },
        containers:[],
        items:[],
    });
    const { id } = useParams()
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        // setFilesData({});
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        await axios.post(`${urlServer}customs/file/select/`, { file_id: id }).then((res) => {
            setFilesData(res.data);
            console.log("res.data");
            console.log(res.data);
            setLoading(false);
        });
    };

    const onChange = (key) => {
        console.log(key);
    };

    const openModal = (image)=> {
        // setOpen(true)
        console.log("modal value")
        console.log(id)
        console.log(image)
        setOpen({open: true, imgPath:image})
    }

    const getLevel = (i) => {
        if (i === 0){
           return checkListLengthDone(filesData.data.steps)
        }else if (i === 1){
            return  checkListLengthDone(filesData.data.docs)
        }else if (i === 2){
            return ""
        }else if (i === 3){
            return filesData.items.length
        }else if (i === 4){
            return filesData.containers.length
        }
        return 0
    }
    const checkListLengthDone = (list) => {
        let doneItem = 0
        list.forEach((value)=> {
            if (value.uploaded || value.done){
                doneItem++
            }
        })
        return `${doneItem}/${list.length}`
    }


    return (
        <div>
            <AlertApp open={alert} setOpen={setAlert} />
            <Tabs
                onChange={onChange}
                type="card"
                items={tabsList(filesData.data.file_id,filesData.data.steps,filesData.data.docs,filesData.data,
                    openModal,nextError).map((tab, i) => {
                    return {
                        label: tab.title+" "+getLevel(i),
                        key: i,
                        children: tab.element,
                    };
                })}
            />
            <ModalShow open={open} handleClose={()=> setOpen({open: false,imgPath: ""})}/>
        </div>
    );
}


export default FilesDetails;
