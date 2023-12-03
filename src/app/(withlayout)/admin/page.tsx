import { Button } from "antd";
import Link from "next/link";

const AdminPage = () => {
  return (
    <div>
      <h1>AdminPage</h1>
      <Link href={`/super_admin/manage-student/create`}>
        <Button>Create Admin</Button>
      </Link>
    </div>
  );
};

export default AdminPage;
