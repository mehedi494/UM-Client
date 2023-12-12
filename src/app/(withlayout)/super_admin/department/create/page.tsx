"use client";
import { useAddDepartmentMutation } from "@/app/redux/api/departmentApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import { Button, Col, Row, message } from "antd";

const CreateDepartment = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Creating...")
    try {
      await addDepartment(data);
      message.success("Department added successfully");
      console.log(data);
    } catch (error: any) {
      console.error(error);
      message.error(error.message);
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
              

              <Col
                className={`gutter-row `}
                span={24}
                style={{
                  marginBottom: "10px",
                }}>
                <FormInput type="text" name="title" size="large" label="Title" />
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
