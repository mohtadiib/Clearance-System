import * as React from "react";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import {useState} from "react";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import MasterData from "./master-data/master-data";
import SubData from "./sub-data/sub-data";

const FileData = ({fileData}) => {
    const [tabValue, setTabValue] = useState("1");
    const handleSetTabValue = (event, newValue) => setTabValue(newValue);

    return (
        <TabContext value={tabValue}>
            <TabList style={{width:"60%"}} onChange={handleSetTabValue} aria-label="lab API tabs example">
                <Tab
                    sx={{ paddingTop:1 }}
                    icon={
                        <Icon color="secondary" fontSize="small" sx={{ mt: -1 }}>
                            home
                        </Icon>
                    }
                    label="الرئيسية" value="1" />
                <Tab
                    sx={{ paddingTop:1 }}
                    icon={
                        <Icon color="secondary" fontSize="small" sx={{ mt: -1 }}>
                            more
                        </Icon>
                    }
                    label="أخرى" value="2" />
            </TabList>
            <TabPanel value="1" sx={{padding:1}}>
                <MasterData fileData={fileData} />
            </TabPanel>
            <TabPanel value="2" sx={{padding:1}}>
                <SubData fileId={fileData.file_id}/>
            </TabPanel>
        </TabContext>
    )
};
export default FileData;
