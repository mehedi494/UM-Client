"use client";
import UMBBreadCrumb from "@/components/ui/UMBBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBBreadCrumb items={[{ label: `${role}`, link: `/${role}` }]} />
      <h1>Manage Student Page</h1>
      <Link href={`/super_admin/manage-student/create`}><Button>Create student</Button></Link>
    </div>
  );
};

export default ManageStudentPage;
