// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material config
import Card from "@mui/material/Card";

// Material Dashboard 2 React config
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DoneIcon from '@mui/icons-material/Done';
import MDButton from "components/MDButton";
import ArticleIcon from '@mui/icons-material/Article';
import UploadFileButton from "../../../layouts/files/details/components/uplaod/upload-file-button";
import {useEffect, useState} from "react";
import {Button} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import ModalShow from "../../../layouts/files/details/components/modal";
function ProfilesList({ profiles, shadow, call }) {
    const [uploadedDoc,setUploadedDoc] = useState([]);
    const [uploadedImage, setUploadedImage] = useState("");

    useEffect(()=>{
        profiles.forEach((value)=>{
            if (value.uploaded){
                setUploadedDoc(prevState => [...prevState, value.id])
            }
        })
    },[])
    const uploadedDocument = (id,image) => {
        setUploadedDoc([...uploadedDoc, id])
        setUploadedImage(image)
    }

    const docUploaded = (id) => {
        return uploadedDoc.includes(id);
    }

    const renderProfiles = profiles.map(({ name, img_path, file_id, id }) => (
    <MDBox key={id} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <MDBox mr={2}>
        <ArticleIcon fontSize="large" color={docUploaded(id)?"info":"warning"}/>
      </MDBox>
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <MDTypography variant="button" fontWeight="medium" color={docUploaded(id)?"info":"warning"}>
          {name}
        </MDTypography>
        <MDTypography variant="caption" color={docUploaded(id)?"text":"warning"}>
            {docUploaded(id)?"تم رفع المستند":"المستند مطلوب لاكمال الاجراءات"}
        </MDTypography>
      </MDBox>
      <MDBox ml="auto">
        {docUploaded(id)? (
            <MDBox mr={2}>
                <Button icon={<EyeOutlined />} onClick={()=>call(img_path?img_path:uploadedImage)}>عرض</Button>
            </MDBox>
        ) : (
            docUploaded(id)?
                <MDBox mr={2}>
                    <DoneIcon fontSize="medium" color="success"/>
                </MDBox>:<UploadFileButton fileId={file_id} docId={id} call={(image)=>uploadedDocument(id,image)}/>
        )}
      </MDBox>
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
           ادارة المستندات
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
ProfilesList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
ProfilesList.propTypes = {
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default ProfilesList;
