/* eslint-disable import/no-cycle */
import StepOne from "./step-one";
import ContainerDetails from "./containers_details";
import ProductStep from "./product_step/products-step";
import FileDataStep from "./file_data/data_step";

const stepsList = (call, value, loadingGet) => {
  if (value === 2) {
    return [
      {
        title: "معلومات الملف",
        content: <StepOne call={call} loadingGet={loadingGet}/>,
      },
      {
        title: "البيانات الضرورية",
        content: <FileDataStep />,
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
      title: "البيانات الضرورية",
      content: <FileDataStep />,
    },
    {
      title: "معلومات البضاعة",
      content: <ProductStep />,
    },
  ];
};
export default stepsList;
