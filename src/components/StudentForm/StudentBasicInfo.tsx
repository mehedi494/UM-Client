"use client";
import { AcademicFacultyOptions } from "@/constants/global";
import { Col, Row } from "antd";
import FormDatePicker from "../Forms/FormDatePicker";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import FormTextArea from "../Forms/FormTextArea";

const StudentBasicInfo = () => {
  return (
    <div>
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
              span={8}
              style={{
                marginBottom: "10px",
              }}>
              <FormInput
                type="email"
                name="admin.email"
                size="large"
                label="Email address"
              />
            </Col>
            <Col
              className="gutter-row "
              span={8}
              style={{
                marginBottom: "10px",
              }}>
              <FormInput
                type="text"
                name="admin.contactNo"
                size="large"
                label="Contact no"
              />
            </Col>
            <Col
              className="gutter-row "
              span={8}
              style={{
                marginBottom: "10px",
              }}>
              <FormInput
                type="text"
                name="admin.emergencycontactNo"
                size="large"
                label="Emergency contact no"
              />
            </Col>
            <Col
              className="gutter-row "
              span={12}
              style={{
                marginBottom: "10px",
              }}>
              <FormDatePicker
                name="student.dateOfBirth"
                size="large"
                label="Date of birth "></FormDatePicker>
            </Col>
            <Col
              className="gutter-row "
              span={12}
              style={{
                marginBottom: "10px",
              }}>
              <FormSelectField
                options={AcademicFacultyOptions}
                name="admin.bloodGroup"
                size="large"
                label="Blood Group"
                placeholder="Select"
              />
            </Col>

            <Col
              style={{
                marginBottom: "10px",
              }}
              className="gutter-row"
              span={12}>
              <FormTextArea
                name="student.presentAddress"
                rows={3}
                label="Present Address"></FormTextArea>
            </Col>
            <Col
              style={{
                marginBottom: "10px",
              }}
              className="gutter-row"
              span={12}>
              <FormTextArea
                name="student.permanentAddress"
                rows={3}
                label="Permanent Address"></FormTextArea>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default StudentBasicInfo;
