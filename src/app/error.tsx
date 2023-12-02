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
      <Image src={errorImg} alt="error-page" width={100}></Image>
    </Row>
  );
};

export default ErrorPage;
