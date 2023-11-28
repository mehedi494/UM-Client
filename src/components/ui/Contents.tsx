"use client";
import { Layout } from "antd";
import UMBBreadCrumb from "./UMBBreadCrumb";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}>
      <UMBBreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: `student`, link: `/${base}` },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contents;
