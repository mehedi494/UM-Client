import { AcademicDepartmentOptions, AcademicFacultyOptions, AcademicSemesterOptions, DepartmentOptions, GenderOptions } from "@/constants/global";
import { Col, Row } from "antd";
import Styles from "../../app/css/Student.module.css";
import FormInput from "../Forms/FormInput";
import FormSelectField from "../Forms/FormSelectField";
import UploadImage from "../ui/UploadImage";
const { marginBottom } = Styles;
const StudentInfo = () => {
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
            className={`gutter-row ${marginBottom}`}
            span={6}
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
          <Col className={`gutter-row  ${marginBottom}`} span={6}>
            <FormInput
              type="text"
              name="admin.name.middleName"
              size="large"
              label="Middle Name"
            />
          </Col>
          <Col className={`gutter-row  ${marginBottom}`} span={6}>
            <FormInput
              type="text"
              name="admin.name.lastName"
              size="large"
              label="Last Name"
            />
          </Col>

          <Col className={`gutter-row  ${marginBottom}`} span={6}>
            <FormInput
              type="password"
              name="password"
              size="large"
              label="Password"
            />
          </Col>
          <Col className={`gutter-row  ${marginBottom}`} span={8}>
            <FormSelectField
              options={AcademicDepartmentOptions}
              name="admin.academicDepartment"
              size="large"
              label="Academic Department"
              placeholder="Select"
            />
          </Col>
          <Col className={`gutter-row  ${marginBottom}`} span={8}>
            <FormSelectField
              options={AcademicFacultyOptions}
              name="admin.academicFaculty"
              size="large"
              label="Academic Faculty"
              placeholder="Select"
            />
          </Col>
          <Col className={`gutter-row  ${marginBottom}`} span={8}>
            <FormSelectField
              options={AcademicSemesterOptions}
              name="admin.academicSemester"
              size="large"
              label="Academic Semester"
              placeholder="Select"
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
           <UploadImage></UploadImage>
          </Col>
         
 
        </Row>
      </div>
    </div>
  );
};

export default StudentInfo;
