"use client";
import { Col, Row } from "antd";
import FormInput from "../Forms/FormInput";
import FormTextArea from "../Forms/FormTextArea";

const GurdianInfo = () => {
  return (
    <div>
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
                name="student.fatherName"
                size="large"
                label="Father name"
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
                name="student.fatherOccupation"
                size="large"
                label="Father occupation"
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
                name="student.fatherContactNo"
                size="large"
                label="Father contact no"
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
                name="student.motherName"
                size="large"
                label="Mother name"
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
                name="student.motherOccupation"
                size="large"
                label="Mother occupation"
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
                name="student.motherContact"
                size="large"
                label="Mother contact no"
              />
            </Col>
            <Col
              className="gutter-row "
              span={6}
              style={{
                marginBottom: "10px",
              }}>
              <FormTextArea
                rows={3}
                name="student.addrress"
                label="Address"
              />
            </Col>
          </Row>
        </div>
    </div>
  );
};

export default GurdianInfo;
