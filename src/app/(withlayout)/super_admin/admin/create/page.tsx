"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  BloodGroupOptions,
  DepartmentOptions,
  GenderOptions,
} from "@/constants/global";
import { adminSchema } from "@/schema/admin";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import Styles from "../../../../css/Admin.module.css";
const { marginBottom } = Styles;
const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <div>
      <UMBBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "admin", link: `/super_admin/admin` },
        ]}
      />
      <h1>Create Admin Page</h1>
      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginTop: "20px",
              marginBottom: "10px",
            }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color: "GrayText",
              }}>
              Admin information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className={`gutter-row ${marginBottom}`}
                span={8}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  type="text"
                  placeholder="First Name"
                  name="admin.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormInput
                  type="text"
                  name="admin.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormInput
                  type="text"
                  name="admin.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>

              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormSelectField
                  options={GenderOptions}
                  name="admin.gender"
                  size="large"
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormSelectField
                  options={DepartmentOptions}
                  name="admin.managmentDepartment"
                  size="large"
                  label="Department"
                  placeholder="Select"
                />
              </Col>

              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <UploadImage />
              </Col>
            </Row>
          </div>

          {/*............ Basic-information........... */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginTop: "20px",
              marginBottom: "10px",
            }}>
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
                color: "GrayText",
              }}>
              Basic information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className={`gutter-row ${marginBottom}`}
                span={8}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  type="email"
                  placeholder="Email"
                  name="admin.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormDatePicker
                  name="admin.dateOfBirth"
                  size="large"
                  label="Date of birth "
                />
              </Col>

              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact "
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormSelectField
                  options={BloodGroupOptions}
                  name="admin.bloodGroup"
                  size="large"
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormTextArea
                  name="admin.presentAddress"
                  rows={3}
                  label="Present  address "></FormTextArea>
              </Col>

              <Col className={`gutter-row  ${marginBottom}`} span={8}>
                <FormTextArea
                  name="admin.permanentAddress"
                  rows={3}
                  label="Permanent address "></FormTextArea>
              </Col>
            </Row>
          </div>
          <Button htmlType="submit" type="primary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
