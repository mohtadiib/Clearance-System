import * as React from "react";
import EditableTable from "../../../tables/data/components/editable-table/editable-table";

const model = {
    name: "البضاعة",
    key: "users",
    tableName: "file_items",
    addButton: "",
    headers: [
        { name: "النوع", type: "" },
        { name: "الاسم", type: "data", table: "clearance_items" },
        { name: "الكمية", type: "" },
        { name: "الوزن", type: "" },
        // { name: "بلد المنشأ", type: "" },
        // { name: "بلد الشحن", type: "" },
    ],
    model: {
        item_details:"",
        item_id:"",
        item_quantity: "",
        item_weight:"",
        origin_country:"",
        shipping_country: "",
    },
}

export default function FileProducts({items}) {
    return (
        <EditableTable tableModel={model} list={items} />
    );
}
