import React from "react";
import EditableCellType from "./editable-cell-type";

function EditableCell({
  // eslint-disable-next-line react/prop-types
  form,
  // eslint-disable-next-line react/prop-types
  callPressEnter,
  // eslint-disable-next-line react/prop-types
  tableName,
  // eslint-disable-next-line react/prop-types
  fieldType,
  // eslint-disable-next-line react/prop-types
  editing,
  // eslint-disable-next-line react/prop-types
  dataIndex,
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  optionsLocal,
  // eslint-disable-next-line react/prop-types
  inputType,
  // eslint-disable-next-line react/prop-types
  record,
  // eslint-disable-next-line react/prop-types
  index,
  // eslint-disable-next-line react/prop-types
  children,
  // eslint-disable-next-line react/prop-types
  single,
  ...restProps
}) {
  // eslint-disable-next-line no-unused-vars
  const cellFieldType = (
    <EditableCellType
      form={form}
      tableName={tableName}
      filedType={fieldType}
      recordValue={record}
      inputType={inputType}
      callPressEnter={callPressEnter}
      dataIndex={dataIndex}
      title={title}
      optionsLocal={optionsLocal}
      editableField={editing}
      single={single}
    />
  );

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <td {...restProps}>{editing ? <div>{cellFieldType}</div> : children}</td>
  );
}

export default EditableCell;
