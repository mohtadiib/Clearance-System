import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {urlServer} from "../../../../config/const";
import EditableTableFile from "../file-products/components/file-editable-table";

const model = {
    name: "البضاعة",
    key: "users",
    addButton: "",
    foreignKey:"",
    tableName: "file_containers",
    customFetch: {table:"file_containers",field1:"file_id",id:""},
    headers: [
        { indexKey: "id",name: "الرقم", type: "" },
        { indexKey: "container_no",name: "رقم الحاوية", type: "" },
        { indexKey: "container_size",name: "حجم الحاوية",  type: "" },
    ],
    model: {
        id:"0",
        container_no:"",
        container_size:"",
    },
}

export default function FileContainers({fileId}) {

    const [data, setData1] = useState([]);
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        setData1([]);

        model.customFetch.id = fileId;
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        await axios.post(urlServer, model.customFetch).then((res) => {
            setData1(res.data);
            setLoading(false);
        });
    };

    model.foreignKey = fileId;
    return (
        <EditableTableFile tableModel={model} list={data} loading={loading}/>
    );
}
