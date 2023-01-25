import axios from "axios";
import urlServer from "../../../../config/const";


const updateCurrentStep = async (fileId, current_step, call,error) => {
    await axios.post(`${urlServer}update/`,
        {table: "files", id: fileId, data: {"current_step": current_step}}).then((res) => {
        call()
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
