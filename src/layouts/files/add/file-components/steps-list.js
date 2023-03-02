/* eslint-disable import/no-cycle */
import StepOne from "./step-one";
import ContainerDetails from "./containers_details";
import ProductStep from "./product_step/products-step";

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
        content: <ProductStep />,
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
      content: <ProductStep />,
    },
  ];
};
export default stepsList;
