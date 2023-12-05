"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import { Button, Col, Row } from "antd";

const CreateDepartment = () => {
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
          { label: "department", link: `/super_admin/department` },
        ]}
      />

      <div>
        {/* resolver={yupResolver(adminSchema)} */}
        {/* submitHandler={onSubmit} */}
        <Form submitHandler={onSubmit}>
          <Row
            justify="center"
            align="middle"
            style={{
              padding: "15px",
              marginTop: "20px",
              marginBottom: "10px",
            }}>
            <Row style={{ width: "25%" }}>
              <p
                style={{
                  fontSize: "18px",
                  marginBottom: "10px",
                  color: "GrayText",
                }}>
               Department List
              </p>

              <Col
                className={`gutter-row `}
                span={24}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput
                  type="text"
                  name="department"
                  size="large"
                  
                />
              </Col>

              <Button htmlType="submit" type="primary">
                Add
              </Button>
            </Row>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateDepartment;
