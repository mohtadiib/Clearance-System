import axios from "axios";
import {urlServer} from "../../../../config/const";


const updateCurrentStep = async (fileId, current_step, call,error) => {
    const body = {fileId: fileId, data: {"current_step": current_step}};
    console.log(body);
    await axios.post(`${urlServer}customs/file/steps/update_step.php`, body).then((res) => {
                console.log(res.data);
            if (res.data.done){
            call()
            }else {
                error(res.data.missed);
            }
    }).catch(err=>{
        console.log(err);
        error();
    });
};


const updateFileStatus = async (fileId,current_status, call,error) => {
    await axios.post(`${urlServer}update/`,
        {table: "files", id: fileId, data: {"status": current_status}}).then((res) => {
        call()
    }).catch(err=>{
        console.log(err);
        error();
    });
};

export {updateCurrentStep, updateFileStatus}
