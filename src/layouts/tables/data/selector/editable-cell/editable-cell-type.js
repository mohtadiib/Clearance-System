import React from "react";
import SelectDocsElement from "../../components/select-docs-element";
import SelectDataElement from "../../components/select-data-element";
import SwitchElement from "../../components/switch-element";
import InputField from "../../components/input-field";
import SelectLocalElement from "../../components/select-local-data";
import DateComponent from "../../components/date-component";

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
  // eslint-disable-next-line react/prop-types
  optionsLocal,
  // eslint-disable-next-line react/prop-types
  single,
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
    case "data":
      tableField = (
       <SelectDataElement single={single} form={form} tableName={tableName} dataIndex={dataIndex} title={title} />
      );
      break;
    case "docs":
      tableField = (
        <SelectDocsElement single={single} form={form} tableName={tableName} dataIndex={dataIndex} title={title} />
      );
      break;
    case "local_select":
      tableField = (
        <SelectLocalElement form={form} optionsLocal={optionsLocal} dataIndex={dataIndex} title={title} />
      );
      break;
    case "date":
      tableField = (
        <DateComponent />
      );
      break;
    default:
      tableField = (
        <div style={{backgroundColor:"lightyellow"}}>
          <InputField
              inputType={inputType}
              callPressEnter={callPressEnter}
              dataIndex={dataIndex}
              title={title}
          />
        </div>
      );
  }

  return <div>{tableField}</div>;
}

export default EditableCellType;
