import { authKey } from "@/constants/storageKey";
import { removeUserInfo } from "@/services/auth.service";
import { UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  MenuProps,
  Row,
  Space,
} from "antd";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
  const router = useRouter();
  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type="text" danger>
          Log out
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "#fff",
      }}>
      <Row
        justify="end"
        align="middle"
        style={{
          height: "100%",
        }}>
        <Dropdown menu={{ items }}>
          <Space wrap size={16}>
            <Badge dot>
              <Avatar shape="circle" size="large" icon={<UserOutlined />} />
            </Badge>
          </Space>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
