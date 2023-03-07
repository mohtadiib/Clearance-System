import { List, Typography } from 'antd';
import Box from "@mui/material/Box";
import * as React from "react";
import Card from "@mui/material/Card";
import MDBadge from "../../../../../components/MDBadge";

const MasterData = ({fileData,sub}) => {
    let data = []
    if (!sub){
         data = [
            {id:1,data_id:'رقم الملف',data_value: fileData.file_id, type:""},
            {id:2,data_id:'المورد',data_value: fileData.supplier_name, type:""},
            {id:3,data_id:'الخط الملاحي',data_value: fileData.shipping_line_name, type:""},
            {id:4,data_id:'نوع الشحن',data_value: fileData.shipping_type, type:""},
            {id:5,data_id:'الكمية',data_value: fileData.quantity, type:""},
            {id:6,data_id:'رقم الشهادة الجمركية',data_value: fileData.quantity, type:""},
            {id:7,data_id:'الخدمة',data_value: fileData.service.name, type:""},
            {id:8,data_id:'تاريخ وصول المستندات',data_value: fileData.data_documents_arrived, type:""},
            {id:9,data_id:'حالة الملف',data_value: fileData.status, type:"badge"},
            {id:10,data_id:'نوع العبوة',data_value: fileData.package_type, type:"none"},
        ];
    }
    return (
        <Card>
            <Box className="scrollable">
                <Box style={{direction:"rtl",marginTop:10}}>
                    <List
                        // bordered
                        dataSource={sub?fileData:data}
                        renderItem={(item) => (
                            <List.Item key={item.id}>
                                <div style={{width:"50%"}}>
                                    <Typography.Text>{item.data_id}</Typography.Text>
                                </div>
                                {item.type==="badge"?
                                    <div style={{width:"50%"}}>
                                        <MDBadge badgeContent={
                                            item.data_value==="1"?"مغلق":"مفتوح"}
                                                 color={item.data_value==="1"?"success":"warning"}
                                                 size="md" container />
                                    </div>
                                    : item.data_value?<List.Item.Meta
                                            title={item.data_value}
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
export default MasterData;
