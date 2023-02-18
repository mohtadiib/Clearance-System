/* eslint-disable no-console,react/prop-types,no-shadow,no-param-reassign,react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Modal, Skeleton, Tooltip } from "antd";
import { EyeFilled } from "@ant-design/icons";
import axios from "axios";
import SortableElement from "../../../../components/dragable";
import urlServer from "../../../../config/const";

// eslint-disable-next-line react/prop-types
function ButtonShow({ recordKey, record, tableName, listTableName, recordValue, list }) {
  const [modalOpen, setModalOpen] = useState(false);
  const listRecordValue = JSON.parse(`[${recordValue}]`);
  const [listFieldItems, setListFieldItems] = useState([]);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
  const [loading, setLoading] = useState(true);
  const checkRecord = () => {
    const listTemp = [];
    Object.keys(record).forEach((item) => {
      if (item === recordKey) {
        listFieldItems.forEach((val) => {
          listTemp.push(+val.id);
        });
        console.log("listItems record");
        console.log(listTemp);
        record[item] = listTemp.toString();
      }
    });
  };

  const updateList = async () => {
    checkRecord();
    setLoadingUpdate(true);
    const body = JSON.stringify({ table: tableName, id: record.id, data: record });
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    await axios.post(`${urlServer}update/`, body).then(() => {
      setLoadingUpdate(false);
      setModalOpen(false);
    });
  };

  const getListLabels = async () => {
    const list = [];
    console.log(listTableName);
    setLoading(true);
    setListFieldItems([]);
    await axios.post(`${urlServer}`, { table: listTableName }).then((res) => {
      setLoading(false);
      res.data.forEach((item) => {
        const items = listRecordValue.filter((val) => val.toString() === item.id);
        if (items.length !== 0) {
          list.push(item);
        }
      });
      setListFieldItems(list);
    });
  };
  const handleCancel = () => {
    setModalOpen(false);
    setLoading(false);
  };
  useEffect(() => {
    if (modalOpen) {
      getListLabels();
    }
  }, [modalOpen]);
  return (
    <>
      <Tooltip title="عرض المزيد من التفاصل">
        <Button onClick={() => setModalOpen(true)} icon={<EyeFilled />}>
          {list ? `${listRecordValue.length}  ` : recordValue}
        </Button>
      </Tooltip>
      <Modal
        title="يمكنك ترتيب الخطوات"
        centered
        open={modalOpen}
        onOk={() => updateList}
        onCancel={() => handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            الغاء
          </Button>,
          <Button key="submit" type="primary" loading={loadingUpdate} onClick={updateList}>
            تحديث البيانات
          </Button>,
        ]}
      >
        {loading ? (
          <Skeleton />
        ) : (
          <SortableElement
            defaultList2={listFieldItems}
            call={(listItems) => {
              const list = [];
              listItems.forEach((item) => {
                list.push(item);
              });
              setListFieldItems(list);
            }}
          />
        )}
      </Modal>
    </>
  );
}

export default ButtonShow;
