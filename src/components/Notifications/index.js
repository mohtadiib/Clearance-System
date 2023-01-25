import {message} from "antd";


const succesMessage = () => {
    message.success("تم الحفظ بنجاح!");
};
const errorMessage = () => {
    message.error("خطأ في الاتصال");
};


export {succesMessage, errorMessage}
