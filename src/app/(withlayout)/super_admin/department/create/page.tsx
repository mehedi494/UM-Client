import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";

const CreateDepartment = () => {
  return (
    <div>
      <UMBBreadCrumb
        items={[
          { label: "super_admin", link: `/super_admin` },
          { label: "department", link: `/super_admin/department` },
        ]}
      />
      <h1>Create Department</h1>
    </div>
  );
};

export default CreateDepartment;
