import React, { useEffect, useState } from "react";
import { Modal } from "antd";
// eslint-disable-next-line react/prop-types
function ModalElement({ list, openModel }) {
  const [modal2Open, setModal2Open] = useState(false);
  useEffect(() => {
    setModal2Open(true);
  }, [openModel]);
  return (
    <Modal
      title="Vertically centered modal dialog"
      centered
      open={modal2Open}
      onOk={() => setModal2Open(false)}
      onCancel={() => setModal2Open(false)}
    >
      <p>{list[0]}</p>
      <p>{list[1]}</p>
      <p>{list[2]}</p>
      <p>{list[3]}</p>
    </Modal>
  );
}
export default ModalElement;
