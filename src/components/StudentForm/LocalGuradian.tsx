import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";

const LocalGuradian = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginTop: "20px",
        marginBottom: "10px",
      }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row "
          span={6}
          style={{
            marginBottom: "10px",
          }}>
          <FormInput
            type="text"
            name="student.localGurdianName"
            size="large"
            label="Local gurdian name"
          />
        </Col>
        <Col
          className="gutter-row "
          span={6}
          style={{
            marginBottom: "10px",
          }}>
          <FormInput
            type="text"
            name="student.localGurdianOccupation"
            size="large"
            label="Local gurdian occupation"
          />
        </Col>
        <Col
          className="gutter-row "
          span={6}
          style={{
            marginBottom: "10px",
          }}>
          <FormInput
            type="text"
            name="student.localGurdianOccupation"
            size="large"
            label="Local gurdian contact no"
          />
        </Col>
        <Col
          className="gutter-row "
          span={6}
          style={{
            marginBottom: "10px",
          }}>
          <FormInput
            type="text"
            name="student.localGurdianAddress"
            size="large"
            label="Local gurdian Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default LocalGuradian;
