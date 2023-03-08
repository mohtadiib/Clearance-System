import { createContext, useEffect, useState } from "react";
import { Form } from "antd";
import axios from "axios";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import urlServer from "../../../config/const";
import FileForm from "./file-form";

export const FileContext = createContext(null);
const formFile = {
  form: {},
  fileList: {
    services: [],
    shipping_lines: [],
    suppliers: [],
    clearance_items: [],
  },
};

function AddFilesData() {
  [formFile.form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const tablesList = ["services", "shipping_lines", "suppliers", "clearance_items"];
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    setLoading(true);
    await axios.post(`${urlServer}mult_table/`, JSON.stringify(tablesList)).then((res) => {
      formFile.fileList = res.data;
      setLoading(false);
    });
  };



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <FileContext.Provider value={formFile}>
        <FileForm loadingGet={loading}/>
      </FileContext.Provider>
      <Footer />
    </DashboardLayout>
  );
}

export default AddFilesData;
