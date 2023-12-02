import { Flex, Spin } from "antd";

const Loading = () => {
  return (
    <Flex  vertical justify="center" align="middle"
    style={{
        height:"100vh"
    }}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>
  );
};

export default Loading;
