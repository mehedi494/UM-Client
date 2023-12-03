import Actionbar from "@/components/ui/Actionbar";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import { Button } from "antd";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div>
      <UMBBreadCrumb items={[{ label: "super_admin", link: `/super_admin` }]} />

      

      <Actionbar title="Admin Page">
      <Link href={`/super_admin/admin/create`}>
        <Button type="primary">Create Admin</Button>
      </Link>
      </Actionbar>
    </div>
  );
};

export default AdminPage;
