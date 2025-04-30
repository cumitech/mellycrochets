"use client";

import { useGetIdentity } from "@refinedev/core";
import {
  Layout as AntdLayout,
  Avatar,
  Dropdown,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import React from "react";
import { useColorMode } from "../../contexts/color-mode";
import Link from "next/link";

const { Text } = Typography;
const { useToken } = theme;

export const Header = ({ sticky = true }) => {
  const { token } = useToken();
  const { data: user } = useGetIdentity({});
  const { mode, setMode } = useColorMode();

  const headerStyles = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
  };

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  const items = [
    {
      key: "username",
      label: user?.name && <Text strong>{user.name}</Text>,
    },
    {
      key: "profile",
      label: <Link href="/profile">Profile</Link>,
    },
    {
      key: "logout",
      label: <Link href="/logout">Logout</Link>,
    },
  ];

  return (
    <AntdLayout.Header style={headerStyles} title="EMS">
      <Space>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        {(user?.name || user?.avatar) && (
          <Dropdown
            menu={{ items }}
            placement="bottomRight"
            trigger={["click"]}
          >
            <div className="cursor-pointer">
              <Space style={{ marginLeft: "8px" }} size="middle">
                {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
              </Space>
            </div>
          </Dropdown>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
