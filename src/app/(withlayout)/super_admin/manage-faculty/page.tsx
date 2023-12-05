import { Button } from "antd";
import Link from "next/link";

const ManageFacultyPage = () => {
  return (
    <div>
      <h1>Manage Faculty Page</h1>
      <Link href={`/super_admin/manage-faculty/create`}>
        <Button>Create Faculty</Button>
      </Link>
    </div>
  );
};

export default ManageFacultyPage;
