"use client";
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedin } from "@/services/auth.service";
import { Flex, Spin } from "antd";
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
    return  <Flex  vertical justify="center" align="middle"
    style={{
        height:"100vh"
    }}>
      <Spin tip="Loading" size="large">
        <div className="content" />
      </Spin>
    </Flex>;
  }
  return (
    <Layout hasSider>
      <Sidebar />
      <Contents> {children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
