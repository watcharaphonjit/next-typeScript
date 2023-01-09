import { Spin } from "antd";
const Spinner = () => {
  return (
    <div className="container-spinner">
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Spinner;
