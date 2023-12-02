"use client";
import { Layout } from "antd";
import UMBBreadCrumb from "./UMBBreadCrumb";
import Header from "./Header";
const { Content } = Layout;
const Contents = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";
  return (
    <Content
      style={{
        minHeight: "100vh",
      }}>
        <Header/>
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
