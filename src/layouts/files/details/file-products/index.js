import * as React from "react";
import EditableTable from "../../../tables/data/components/editable-table/editable-table";

const model = {
    name: "البضاعة",
    key: "users",
    tableName: "file_items",
    addButton: "",
    headers: [
        { name: "الرقم", type: "" },
        { name: "النوع", type: "" },
        { name: "الاسم", type: "data", table: "clearance_items", single:true },
        { name: "الكمية", type: "" },
        { name: "الوزن", type: "" },
        // { name: "بلد المنشأ", type: "" },
        // { name: "بلد الشحن", type: "" },
    ],
    model: {
        id:"0",
        item_details:"",
        item_id:"",
        item_quantity: "",
        item_weight:"",
        file_id: "",
    },
}

export default function FileProducts({items}) {
    model.model.file_id = items[0].fileId;
    return (
        <EditableTable tableModel={model} list={items} />
    );
}
