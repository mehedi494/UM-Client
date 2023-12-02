"use client";
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedin } from "@/services/auth.service";
import Layout from "antd/es/layout/layout";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const userLoggedIn = isLoggedin();
  const [isLoading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setLoading(true);
  }, [router, userLoggedIn]);
  if (!isLoading) {
    return <p>Loading ...</p>;
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents> {children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
