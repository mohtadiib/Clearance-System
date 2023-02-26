import React, { useEffect, useState } from "react";
import { Form, Popconfirm, Table, Typography } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  DeleteFilled,
  EditFilled,
} from "@ant-design/icons";
import axios from "axios";
import urlServer from "../../../../../config/const";
import EditableCell from "../../selector/editable-cell/editable-cell";
import NormalCellType from "../../selector/normal-cell";
import { useNavigate} from "react-router-dom";
import MDButton from "../../../../../components/MDButton";
import Icon from "@mui/material/Icon";

function EditableTable({ tableModel, list, loading }) {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [editingKey, setEditingKey] = useState({ edit: "", loading: "" });
  const isEditing = (record) => record.id === editingKey.edit;
  const navigate = useNavigate();

  const handleAdd = () => {
    setAdd(true);
    tableModel.model.id = data.length + 1;
    // eslint-disable-next-line react/prop-types
    setData([tableModel.model, ...data]);
    // eslint-disable-next-line no-use-before-define,react/prop-types
    if (tableModel.addButton){
      navigate(tableModel.addButton);
    }else {
      edit(tableModel.model);
    }
  };
  const edit = (record) => {
    form.setFieldsValue({
      ...record,
    });
    setEditingKey({ edit: record.id, loading: "" });
  };
  const handleDelete = (newData) => {
    const newData2 = data.filter((item) => item.id !== newData.id);
    const newData1 = data.filter((item) => item.id === newData.id);
    deleteData(newData1, newData2);
  };
  const cancel = () => {
    const newData = data.filter((item) => item.id !== "0");
    setData(newData);
    setEditingKey({ edit: "", loading: "" });
  };
  const checkAndModifyRecord = (record) => {
    Object.keys(record).forEach((item) => {
      if (typeof record[item] === "object") {
        // eslint-disable-next-line no-param-reassign
        record[item] = record[item].toString();
      }
    });
  };
  const saveData = async (newData, call) => {
    setEditingKey({ edit: "", loading: newData.id });
    const record = add ? { ...newData, id: 0 } : { ...newData, id: newData.id };
    checkAndModifyRecord(record);
    const body = {
      // eslint-disable-next-line react/prop-types
      table: tableModel.tableName,
      data: record,
    };
    const myJSON = JSON.stringify(body);
    // eslint-disable-next-line no-console
    console.log("all record data");
    // eslint-disable-next-line no-console
    console.log(myJSON);
    const urlApi = add ? `${urlServer}insert/` : `${urlServer}update/`;
    await axios
      .post(urlApi, myJSON)
      .then(() => {
        call();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(`error${err}`);
        setAdd(false);
        setEditingKey({ edit: "", loading: "" });
      });
  };
  // eslint-disable-next-line no-unused-vars
  const deleteData = async (newData, newData2) => {
    setEditingKey({ edit: "", loading: newData[0].id });
    const recordId = newData[0].id;
    // eslint-disable-next-line react/prop-types
    const body = JSON.stringify({ table: tableModel.tableName, id: recordId });
    await axios.post(`${urlServer}delete/`, body).then(() => {
      // eslint-disable-next-line no-console
      console.log("deleted");
      setEditingKey({ edit: "", loading: "" });
      setData(newData2);
    });
  };
  useEffect(() => {
    setData(list);
  }, [list]);
  const save = async (id) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => id === item.id);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        saveData(row, () => {
          setData(newData);
          setEditingKey({ edit: "", loading: "" });
          setAdd(false);
          // eslint-disable-next-line no-console
          console.log("done process");
          // eslint-disable-next-line no-console
          console.log(add);
        });
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey({ edit: "", loading: "" });
      }
    } catch (errInfo) {
      // eslint-disable-next-line no-console
      console.log("Validate Failed:", errInfo);
    }
  };
  // keyboard handling
  const handlePress = () => {
    save(editingKey.edit);
  };

  // Add Columns keys
  const columns = [];
  const getKeys = (object) => {
    if (object) {
      return Object.keys(object);
    }
    return [];
  };
  // eslint-disable-next-line no-plusplus,react/prop-types
  for (let i = 0; i <= tableModel.headers.length; i++) {
    // eslint-disable-next-line react/prop-types
    if (i !== tableModel.headers.length) {
      if (i === 0) {
        columns.push({
          title: tableModel.headers[i].name,
          dataIndex: getKeys(data[0])[i],
          editable: false,
          width: "1%",
          render: (_, record) => (
            <div style={{ width: 35 }}>
              <NormalCellType
                filedType=""
                loading={editingKey.loading === record.id}
                recordValue={Object.values(record)[i]}
              />
            </div>
          ),
        });
      } else {
        columns.push({
          title: tableModel.headers[i].name,
          dataIndex: getKeys(data[0])[i],
          width: "18%",
          editable: true,
          render: (_, record) => {
            const fieldType = tableModel.headers[i].type;
            return (
              <NormalCellType
                recordKey={getKeys(record)[i]}
                record={record}
                tableName={tableModel.tableName}
                listTableName={tableModel.headers[i].table}
                recordValue={Object.values(record)[i]}
                loading={editingKey.loading === record.id}
                filedType={fieldType}
                optionsLocal={tableModel.headers[i].selectList ?? []}
              />
            );
          },
        });
      }
    } else {
      columns.push({
        title: "عملية",
        dataIndex: "operation",
        width: "10%",
        render: (_, record) => {
          const editable = isEditing(record);
          return editable ? (
            <span>
              <Typography.Link
                onClick={() => save(record.id)}
                style={{
                  marginLeft: 8,
                }}
              >
                <CheckOutlined />
              </Typography.Link>
              <Popconfirm title="تأكيد الإلغاء" onConfirm={cancel}>
                <CloseOutlined />
              </Popconfirm>
            </span>
          ) : (
            <div style={{ width: 40 }}>
              <Typography.Link
                disabled={editingKey.edit !== ""}
                onClick={() => edit(record)}
                style={{
                  marginLeft: 8,
                }}
              >
                <EditFilled />
              </Typography.Link>
              {data.length >= 1 ? (
                <Popconfirm title="تأكيد الحذف" onConfirm={() => handleDelete(record)}>
                  <DeleteFilled style={{ fontSize: "16px", color: "#ff6767" }} />
                </Popconfirm>
              ) : null}
            </div>
          );
        },
      });
    }
  }

  const mergedColumns = columns.map((col, index) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        // eslint-disable-next-line object-shorthand
        form: form,
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        optionsLocal: tableModel.headers[index].selectList??[],
        editing: isEditing(record),
        callPressEnter: handlePress,
        // eslint-disable-next-line react/prop-types
        fieldType: tableModel.headers[index].type,
        // eslint-disable-next-line react/prop-types
        tableName: tableModel.headers[index].table,
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <div style={{marginBottom:20}}>
        <MDButton onClick={handleAdd} variant="gradient" color="info">
          <div style={{marginLeft:"5px"}}>إضافة</div>
          <Icon>add</Icon>&nbsp;
        </MDButton>
      </div>
      <Table
        loading={loading}
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
}

export default EditableTable;
