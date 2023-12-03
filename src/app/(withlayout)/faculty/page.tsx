import { Button } from "antd";
import Link from "next/link";

const FacultyPage = () => {
  return (
    <div>
      <h1>FacultyPage</h1>
      <Link href={`/super_admin/manage-student/create`}>
        <Button>Create Faculty</Button>
      </Link>
    </div>
  );
};

export default FacultyPage;
