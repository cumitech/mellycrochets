"use client";

import { useGetIdentity } from "@refinedev/core";
import {
  Layout as AntdLayout,
  Avatar,
  Space,
  Switch,
  theme,
  Typography,
} from "antd";
import React from "react";
import { useColorMode } from "../../contexts/color-mode";

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
          <Space style={{ marginLeft: "8px" }} size="middle">
            {user?.name && <Text strong>{user.name}</Text>}
            {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />}
          </Space>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
