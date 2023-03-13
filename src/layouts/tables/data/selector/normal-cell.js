/* eslint-disable react/prop-types */
import React from "react";
import { Skeleton } from "antd";
import BadgeElement from "../components/badge";
import ButtonShow from "../components/button-show";

// eslint-disable-next-line react/prop-types
function NormalCellType({
  recordKey,
  record,
  tableName,
  listTableName,
  filedType,
  recordValue,
  loading,
  optionsLocal,
  single,
}) {
  let tableField;
  const switchStatus = {
    badge: { itemOn: "عام", itemOff: "خاص" },
    status: { itemOn: "متاح", itemOff: "محظور" },
  };
  switch (filedType) {
    case "local_select":
      tableField = <BadgeElement normal actualValue={+recordValue} value={optionsLocal[+recordValue].label} status={switchStatus.badge} />;
      break;
    case "badge":
      tableField = <BadgeElement value={recordValue} status={switchStatus.badge} />;
      break;
    case "status":
      tableField = <BadgeElement value={recordValue} status={switchStatus.status} />;
      break;
    case "docs":
      tableField = (
          single?
          <div>{recordValue}</div>:
          <ButtonShow
          recordKey={recordKey}
          record={record}
          tableName={tableName}
          listTableName={listTableName}
          recordValue={recordValue}
          list
        />
      );
      break;
    case "data":
      tableField = (
        single?
         <div>{recordValue}</div>:
         <ButtonShow
          recordKey={recordKey}
          record={record}
          tableName={tableName}
          listTableName={listTableName}
          recordValue={recordValue}
          list
        />
      );
      break;
    default:
      tableField = <div>{recordValue}</div>;
  }

  return loading ? <Skeleton.Input active size="small" block /> : tableField;
}

export default NormalCellType;
