"use client";
import {
  useDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/app/redux/api/departmentApi";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import Actionbar from "@/components/ui/Actionbar";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import { Button, Col, Row, message } from "antd";

const EditDepartmentPage = ({ params }: { params: Record<string, string> }) => {
  const { id } = params;

  const { data, isLoading } = useDepartmentQuery(id);
  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    try {
      // console.log(data);
      message.loading("updating...");
      await updateDepartment({ id: data.id, body: values });
      message.success("Department updated successfully");
      // console.log(data);
    } catch (error: any) {
      console.error(error);
      message.error(error.message);
    }
  };

  const defaultValues = { title: data?.title || "" };

  return (
    <div>
      <UMBBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "department", link: `/super_admin/department` },
        ]}
      />
      <Actionbar title="Department update"></Actionbar>

      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
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
              update
            </Button>
          </Row>
        </Row>
      </Form>
    </div>
  );
};

export default EditDepartmentPage;
