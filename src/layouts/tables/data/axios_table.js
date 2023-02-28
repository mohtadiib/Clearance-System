/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import arEG from "antd/locale/ar_EG";
import EditableTable from "./components/editable-table/editable-table";
import urlServer from "../../../config/const";
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line react/prop-types,no-unused-vars
function AxiosTable({ tableModel }) {
  const [data1, setData1] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    getData();
  }, []);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    setData1([]);
    const body = tableModel.customFetch?tableModel.customFetch:{ table: tableModel.tableName };
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    await axios.post(urlServer, body).then((res) => {
      setData1(res.data);
      setLoading(false);
    });
  };
  return (
    <ConfigProvider locale={arEG}>
      <EditableTable tableModel={tableModel} list={data1} loading={loading} />
    </ConfigProvider>
  );
}

export default AxiosTable;
