import Login from "@/components/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "University managment | login",
  description: "university manangement login",
};

const LoginPage = () => {
  return (
    <>
      {" "}
      <Login />
    </>
  );
};

export default LoginPage;
