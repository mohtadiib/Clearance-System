// Material Dashboard 2 React example config
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import React from "react";
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Skeleton } from 'antd';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
const { Meta } = Card;

function Tables() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <Card
            style={{
                width: 300,
                marginTop: 16,
            }}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <div>
                    ختام التفاصيل
                </div>,
            ]}
        >
            <Skeleton loading={false} avatar active>
                <Meta
                    avatar={<FolderSpecialIcon fontSize="large" color="secondary"/>}
                    title="General Cargo"
                    description={
                   <div>
                       <div>
                           ختام التفاصيل
                       </div>
                       <div>
                           3000 SDG
                       </div>
                   </div>
                    }
                />
            </Skeleton>
        </Card>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
