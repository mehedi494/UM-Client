import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { LegacyButtonType } from "antd/es/button/button";
import React, { ReactNode } from "react";

// const LocalizedModal = () => {
//   const [open, setOpen] = useState(false);

//   const showModal = () => {
//     setOpen(true);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       {/* <Button type="primary" onClick={showModal}>
//         Modal
//       </Button> */}
//       <Modal
//         title="Modal"
//         open={open}
//         onOk={hideModal}
//         onCancel={hideModal}
//         okText="确认"
//         cancelText="取消"
//       >
//         <p>Bla bla ...</p>
//         <p>Bla bla ...</p>
//         <p>Bla bla ...</p>
//       </Modal>
//     </>
//   );
// };

interface IUMModelProps {
  primaryButtonText: string;
  title?: string;
  icon?: React.ReactElement;
  content?: string;
  okText?: ReactNode | string;
  cancelText?: string;
  onOk?: any;
  okType?: LegacyButtonType;
}
const UMModal = ({
  primaryButtonText,
  title,
  icon = <ExclamationCircleOutlined />,
  content,
  okText,
  cancelText,
  onOk,
  okType = "danger",
}: IUMModelProps) => {
  const [modal, contextHolder] = Modal.useModal();

  const confirm = () => {
    modal.confirm({
      centered: true,
      title,
      okText,
      okType,
      icon,
      content,
      cancelText,

      onOk: (e: string) => onOk(e),
    });
  };

  return (
    <>
      <Button type="primary" danger onClick={confirm}>
        {primaryButtonText}
      </Button>

      {contextHolder}
    </>
  );
};

export default UMModal;
