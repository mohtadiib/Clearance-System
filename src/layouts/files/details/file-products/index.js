import { Table } from 'antd';
import MDButton from "../../../../components/MDButton";
import Icon from "@mui/material/Icon";
const columns = [
    {
        title: 'النوع',
        dataIndex: 'item_name',
        id: 'name',
    },
    {
        title: 'الاسم',
        dataIndex: 'item_details',
        id: 'age',
    },
    {
        title: 'الكمية',
        dataIndex: 'item_quantity',
        id: 'address',
    },
];
const FileProducts = ({items}) => {
    return <div>
        <Table columns={columns} dataSource={items} />
        <MDButton variant="gradient" color="info">
            <div style={{marginLeft:"5px"}}>اضافة بضاعة</div>
            <Icon>add</Icon>&nbsp;
        </MDButton>
    </div>
};
export default FileProducts;
