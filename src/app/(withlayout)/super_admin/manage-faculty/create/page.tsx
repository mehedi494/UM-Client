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

const CreateFaculty = () => {
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
      <h1>Create faculty page</h1>
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
              Faculty information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={6}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  type="text"
                  placeholder="First Name"
                  name="faculty.name.firstName"
                  size="large"
                  label="First Name"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <FormInput
                  type="text"
                  name="faculty.name.middleName"
                  size="large"
                  label="Middle Name"
                />
              </Col>
              <Col className="gutter-row" span={6}>
                <FormInput
                  type="text"
                  name="faculty.name.lastName"
                  size="large"
                  label="Last Name"
                />
              </Col>

              <Col className="gutter-row" span={6}>
                <FormInput
                  type="password"
                  name="password"
                  size="large"
                  label="Password"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormSelectField
                  options={GenderOptions}
                  name="faculty.gender"
                  size="large"
                  label="Gender"
                  placeholder="Select"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormSelectField
                  options={DepartmentOptions}
                  name="faculty.academicDepartment"
                  size="large"
                  label="Academic Department"
                  placeholder="Select"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormSelectField
                  options={DepartmentOptions}
                  name="faculty.academicFaculty"
                  size="large"
                  label="Academic Faculty"
                  placeholder="Select"
                />
              </Col>

              <Col className="gutter-row" span={8}>
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
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  type="email"
                  placeholder="Email"
                  name="faculty.email"
                  size="large"
                  label="Email"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormInput
                  type="text"
                  name="faculty.contactNo"
                  size="large"
                  label="Contact No"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormDatePicker
                  name="faculty.dateOfBirth"
                  size="large"
                  label="Date of birth "
                />
              </Col>

              <Col className="gutter-row" span={8}>
                <FormInput
                  type="text"
                  name="faculty.emergencyContactNo"
                  size="large"
                  label="Emergency Contact "
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormSelectField
                  options={BloodGroupOptions}
                  name="faculty.bloodGroup"
                  size="large"
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormInput
                  type="text"
                  name="faculty.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col className="gutter-row" span={8}>
                <FormTextArea
                  name="faculty.presentAddress"
                  rows={3}
                  label="Present  address "></FormTextArea>
              </Col>

              <Col className="gutter-row" span={8}>
                <FormTextArea
                  name="faculty.permanentAddress"
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

export default CreateFaculty;
