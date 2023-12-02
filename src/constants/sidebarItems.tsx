import {
  AppstoreOutlined,
  ProfileOutlined,
  TableOutlined,
  UserOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <UserOutlined />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
          icon: <ProfileOutlined />,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/manage-student`}>Manage Students</Link>,
      icon: <TableOutlined />,
      key: "manage-students",
    },
    {
      label: <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>,
      icon: <TableOutlined />,
      key: "manage-faculty",
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Academic",
      key: "manage-academic",
      icon: <TableOutlined />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Managment",
      key: "managment",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Room</Link>,
          key: `/${role}/room`,
        },
      ],
    },
  ];
  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Academic",
      key: "manage-academic",
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/academic/department`,
    },{
      label: "Manage Permission",
      key: `manage-permission`,
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`${role}/permission`}>View Permission</Link>,
          key: `/${role}/permission`,
        },
      ],
    },
    {
      label: "Managment",
      key: "managment",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
  ];
  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      key: `/${role}/courses`,
      icon: <TableOutlined />,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course Schedules</Link>,
      key: `/${role}/courses-schedules`,
      icon: <ScheduleOutlined />,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      key: `/${role}/registration`,
      icon: <ThunderboltOutlined />,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      key: `/${role}/payment`,
      icon: <CreditCardOutlined />,
    },
    {
      label: <Link href={`/${role}/academic-report`}>Academic Report</Link>,
      key: `/${role}/academic-report`,
      icon: <FileTextOutlined />,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
};
