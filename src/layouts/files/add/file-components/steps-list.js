/* eslint-disable import/no-cycle */
import StepOne from "./step-one";
import ContainerDetails from "./containers_details";
import ProductComponent from "./products-component";

const stepsList = (call, value) => {
  if (value === 2) {
    return [
      {
        title: "معلومات الملف",
        content: <StepOne call={call} />,
      },
      {
        title: "تفاصيل الحاويات",
        content: <ContainerDetails />,
      },
      {
        title: "معلومات البضاعة",
        content: <ProductComponent />,
      },
    ];
  }
  return [
    {
      title: "معلومات الملف",
      content: <StepOne call={call} />,
    },
    {
      title: "معلومات البضاعة",
      content: <ProductComponent />,
    },
  ];
};
export default stepsList;
