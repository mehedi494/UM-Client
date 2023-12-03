import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
  return (
    <div>
      <UMBBreadCrumb items={[{ label: "super_admin", link: `/super_admin` }]} />
      <h1>Department Page</h1>
      <Link href={`/super_admin/department/create`}>
        <Button>Create student</Button>
      </Link>
    </div>
  );
};

export default DepartmentPage;
