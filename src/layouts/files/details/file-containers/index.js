import { Table } from 'antd';
import MDButton from "../../../../components/MDButton";
import Icon from "@mui/material/Icon";
const columns = [
    {
        title: 'رقم الحاوية',
        dataIndex: 'container_no',
        id: 'name',
    },
    {
        title: 'حجم الحاوية',
        dataIndex: 'container_size',
        id: 'age',
    },
];
const FileContainers = ({containers}) => {
    console.log("containers")
    console.log(containers)
    return <div>
        <Table columns={columns} dataSource={containers} />
        <MDButton variant="gradient" color="info">
            <div style={{marginLeft:"5px"}}>اضافة بضاعة</div>
            <Icon>add</Icon>&nbsp;
        </MDButton>
    </div>
};
export default FileContainers;
