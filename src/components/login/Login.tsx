"use client";

import { useUserLoginMutation } from "@/app/redux/api/authApi";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { isLoggedin, storeUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import loginImage from "../../assets/Login.gif";

type FormValues = {
  id: string;
  password: string;
};

const Login = () => {
  // console.log(isLoggedin());
  const router = useRouter();
  if (isLoggedin()) {
    router.push("/profile");
  }

  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      // console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh",
      }}>
      <Col sm={12} md={16} lg={10}>
        <Image priority src={loginImage} alt="login-banner" width={500} />
      </Col>

      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0",
          }}>
          First login your account
        </h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput
                name="id"
                type="text"
                size="large"
                label="userId"></FormInput>
            </div>

            <div
              style={{
                margin: "15px 0",
              }}>
              <FormInput
                name="password"
                type="password"
                size="large"
                label="Password"></FormInput>
            </div>
            <Button type="primary" htmlType="submit">
              Log in
            </Button>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
