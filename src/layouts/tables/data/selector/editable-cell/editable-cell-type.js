import React from "react";
import SelectDocsElement from "../../components/select-docs-element";
import SelectDataElement from "../../components/select-data-element";
import SwitchElement from "../../components/switch-element";
import InputField from "../../components/input-field";

// eslint-disable-next-line react/prop-types
function EditableCellType({
  // eslint-disable-next-line react/prop-types
  form,
  // eslint-disable-next-line react/prop-types
  tableName,
  // eslint-disable-next-line react/prop-types
  filedType,
  // eslint-disable-next-line react/prop-types
  inputType,
  // eslint-disable-next-line react/prop-types
  callPressEnter,
  // eslint-disable-next-line react/prop-types
  dataIndex,
  // eslint-disable-next-line react/prop-types
  title,
}) {
  let tableField;
  const switchStatus = {
    badge: { itemOn: "عام", itemOff: "خاص" },
    status: { itemOn: "متاح", itemOff: "محظور" },
  };
  switch (filedType) {
    case "badge":
      tableField = (
        <SwitchElement
          form={form}
          dataIndex={dataIndex}
          title={title}
          status={switchStatus.badge}
        />
      );
      break;
    case "status":
      tableField = (
        <SwitchElement
          form={form}
          dataIndex={dataIndex}
          title={title}
          status={switchStatus.status}
        />
      );
      break;
    case "docs":
      tableField = (
        <SelectDocsElement form={form} tableName={tableName} dataIndex={dataIndex} title={title} />
      );
      break;
    case "data":
      tableField = (
        <SelectDataElement form={form} tableName={tableName} dataIndex={dataIndex} title={title} />
      );
      break;
    default:
      tableField = (
        <InputField
          inputType={inputType}
          callPressEnter={callPressEnter}
          dataIndex={dataIndex}
          title={title}
        />
      );
  }

  return <div>{tableField}</div>;
}

export default EditableCellType;
