"use client";

import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useEffect, useRef, useState } from 'react';

import { sidebarItems } from "@/constants/sidebarItems";
import { getUserInfo } from "@/services/auth.service";


const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;
  // console.log(role);


 
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      max-width={250}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}>
      <div 
        style={{
          color: "white",
          fontSize: "1.5rem",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
        >
        UMS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;
