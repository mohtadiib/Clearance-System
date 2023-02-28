import * as React from "react";
import EditableTableFile from "./components/file-editable-table";
import {useEffect, useState} from "react";
import axios from "axios";
import urlServer from "../../../../config/const";

const model = {
    name: "البضاعة",
    key: "users",
    tableName: "file_items",
    addButton: "",
    foreignKey:"",
    customFetch: {table:"file_items",field1:"file_id",id:"",
        table2:"clearance_items",  field2:"item_id",
        table3:"clearance_categs", field3:"category_id"
    },
    headers: [
        { indexKey: "id",name: "الرقم", type: "" },
        { indexKey: "category_id",name: "النوع", type: "data", table: "clearance_categs", single: true},
        { indexKey: "item_id",name: "الاسم",  type: "docs", table: "clearance_items", single:true },
        { indexKey: "item_quantity",name: "الكمية",type: "" },
        { indexKey: "item_weight",name: "الوزن", type: "" },
    ],
    model: {
        id:"0",
        category_id:"",
        item_id:"",
        item_quantity: "",
        item_weight:"",
    },
}

export default function FileProducts({items}) {

    const [data, setData1] = useState([]);
    useEffect(() => {
        // eslint-disable-next-line no-use-before-define
        getData();
    }, []);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
        setLoading(true);
        setData1([]);

        model.customFetch.id = items[0].file_id
        // eslint-disable-next-line react/prop-types,react/destructuring-assignment
        await axios.post(urlServer, model.customFetch).then((res) => {
            setData1(res.data);
            setLoading(false);
        });
    };

    model.foreignKey = items[0].file_id;
    return (
        <EditableTableFile tableModel={model} list={data} loading={loading}/>
    );
}
