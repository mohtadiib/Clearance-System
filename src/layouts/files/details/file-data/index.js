import { List, Typography } from 'antd';
import Box from "@mui/material/Box";
import * as React from "react";
import Card from "@mui/material/Card";
import MDBadge from "../../../../components/MDBadge";

const FileData = ({fileData}) => {
    const data = [
        {title:'رقم الملف',value:fileData.file_id, type:""},
        {title:'المورد',value:fileData.supplier_name, type:""},
        {title:'الخط الملاحي',value:fileData.shipping_line_name, type:""},
        {title:'نوع الشحن',value:fileData.shipping_type, type:""},
        {title:'الكمية',value:fileData.quantity, type:""},
        {title:'رقم الشهادة الجمركية',value:fileData.quantity, type:""},
        {title:'الخدمة',value:fileData.service.name, type:""},
        {title:'تاريخ وصول المستندات',value:fileData.data_documents_arrived, type:""},
        {title:'حالة الملف',value:fileData.status, type:"badge"},
        {title:'نوع العبوة',value:fileData.package_type, type:"none"},
    ];

    return (
        <Card sx={{ height: "100%", boxShadow: "none" }}>
            <Box className="scrollable">
                <Box style={{direction:"rtl"}}>
                    <List
                        header={<div>تفاصيل الملف</div>}
                        bordered
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item key={item.title}>
                                <div style={{width:"50%"}}>
                                    <Typography.Text title>{item.title}</Typography.Text>
                                </div>
                                {item.type==="badge"?
                                    <div style={{width:"50%"}}>
                                        <MDBadge badgeContent={
                                            item.value==="1"?"مغلق":"مفتوح"}
                                                 color={item.value==="1"?"success":"info"}
                                                 size="md" container />
                                    </div>
                                    : item.value?<List.Item.Meta
                                            title={item.value}
                                        />:
                                        <div style={{width:"50%"}}>
                                            لم يحدد
                                        </div>
                                }
                            </List.Item>
                        )}
                    />
                </Box>
            </Box>
        </Card>
    )
};
export default FileData;
