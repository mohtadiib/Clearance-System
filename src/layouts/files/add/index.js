import { createContext, useEffect, useState } from "react";
import { Form } from "antd";
import axios from "axios";
import DashboardLayout from "../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../examples/Footer";
import urlServer from "../../../config/const";
import StepsComponent from "./file-components/steps-component";

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
  const [componentSize, setComponentSize] = useState("default");
  const [items, setItems] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
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
        <Form
          labelCol={{
            span: 2,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          form={formFile.form}
        >
          <StepsComponent />
        </Form>
      </FileContext.Provider>
      <Footer />
    </DashboardLayout>
  );
}

export default AddFilesData;
