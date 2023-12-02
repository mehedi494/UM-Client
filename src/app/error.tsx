"use client";

import errorImg from "@/assets/Computer troubleshooting-pana.svg";
import { Row } from "antd";
import Image from "next/image";
const ErrorPage = () => {
  return (
    <Row
    
      justify="center"
      align="middle"
      style={{
        height: "100vh",
      }}>
      <Image priority src={errorImg} alt="error-page" width={600}></Image>
    </Row>
  );
};

export default ErrorPage;
