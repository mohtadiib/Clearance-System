import React, {useEffect, useState} from 'react';
import axios from "axios";
import urlServer from "../../../../../config/const";
import MasterData from "../master-data/master-data";

function SubData({fileId}) {
    const [fileData, setFileData] = useState({data:[],loading:false});
    const body = {table:"file_data",field1:"file_id",id:fileId,
        table3:"clearance_data", field3:"data_id"
    }

    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        setFileData({data: [],loading: true});
        await axios.post(`${urlServer}`, body).then((res) => {
            console.log("res.data");
            console.log(res.data);
            setFileData({data: res.data,loading: false});
        });
    };


    return (
       <MasterData fileData={fileData.data} sub />
    );
}

export default SubData;
