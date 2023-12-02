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
      
     <div style={{padding:"1rem"}}> {children}</div>
    </Content>
  );
};

export default Contents;
