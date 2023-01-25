import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import {useState} from "react";
import urlServer from "../../../../../config/const";
import axios from "axios";
import getRandomInt from "../../../../../config/randomInt";


const UploadFileButton = ({fileId, docId, call}) => {

    const [progress, setProgress] = useState(0);

    const uploadImage = async options => {
        const { onSuccess, file } = options;
        const config = {
            // headers: { "content-type": "multipart/form-data" },
            onUploadProgress: event => {
                const percent = Math.floor((event.loaded / event.total) * 100);
                setProgress(percent);
                if (percent === 100) {
                    setTimeout(() => setProgress(0), 1000);
                }
                // onProgress({ percent: (event.loaded / event.total) * 100 });
            }
        };
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = e => {
            // console.log(e.target.result);
            onSubmit(e.target.result,config,onSuccess)
        };

    };

    // console.log(getRandomInt());

    const onSubmit = async (selectedImage,config,onSuccess,onError) => {
        const randomName = getRandomInt()+'.png';
        console.log("sumbited")
        const formData = { image: selectedImage, file_id: fileId, doc_id: docId, img_name: randomName }
        let endpoint = `${urlServer}upload.php`;
        console.log("formData");
        console.log(formData);
        try {
            const res = await axios.post(
                endpoint,
                formData,
                config
            );
            onSuccess("Ok");
            call(randomName);
            console.log("server res: ", res.data);
        } catch (err) {
            console.log("Eroor: ", err);
            // const error = new Error("Some error");
            onError({ err });
        }

    }

    return <div style={{marginTop: "20%"}}>
        <Upload customRequest={uploadImage}>
            <Button type="primary" style={{backgroundColor:"darkorange"}} icon={<UploadOutlined/>}>رفع الملف</Button>
        </Upload>
    </div>
};
export default UploadFileButton;
