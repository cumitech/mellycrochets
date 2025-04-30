// app/profile/page.tsx (for App Router structure)
"use client";

import {
  Card,
  Tabs,
  Button,
  Avatar,
  Form,
  Input,
  Space,
  message,
  Tag,
} from "antd";
import { CloseOutlined, EditOutlined, SaveOutlined } from "@ant-design/icons";
import { useGetIdentity, useOne, useUpdate } from "@refinedev/core";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { LockOutlined } from "@ant-design/icons";

const { TabPane } = Tabs;

export default function IndexPage() {
  const { mutate } = useUpdate({
    resource: "users",
  });

  const [form] = Form.useForm();
  const [isEditing, setIsEditing] = useState(false);
  const { data: user } = useGetIdentity({});

  const { data, isLoading, isFetching } = useOne({
    resource: "users",
    id: user?.id,
  });

  const handleEditClick = () => {
    setIsEditing(true);
    form.setFieldsValue({
      username: user?.name,
      email: user?.email,
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    form.resetFields();
  };

  const handleSave = (values) => {
    mutate({
      id: user?.id,
      values: {
        ...values,
        id: user?.id,
        image: user?.avatar,
      },
    });

    setIsEditing(false);
  };
  if (isLoading || isFetching) {
    return (
      <div
        style={{
          minHeight: "65vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="text-lg text-center">loading...</p>
      </div>
    );
  }
  const { data: userData } = data;
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="shadow-lg">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <Avatar size={100} src={user?.avatar} />
          <div className="flex-1">
            <h2 className="text-2xl font-semibold">{user?.name}</h2>
            <p className="text-gray-500">{user?.email}</p>

            {!isEditing && (
              <Button
                type="primary"
                icon={<EditOutlined />}
                className="mt-2"
                onClick={handleEditClick}
              >
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        <Tabs defaultActiveKey="overview" className="mt-8">
          <TabPane tab="Overview" key="overview">
            <p className="text-gray-700">
              Welcome to your profile! Here you can manage your account,
              settings, and preferences.
            </p>

            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-600">
                Authentication Accounts
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  icon={<FaFacebook className="text-blue-600 text-xl" />}
                  className="flex items-center gap-2 w-full sm:w-auto"
                  type="default"
                  size="large"
                >
                  Connect Facebook
                </Button>

                <Button
                  icon={<FcGoogle className="text-xl" />}
                  className="flex items-center gap-2 w-full sm:w-auto"
                  type="default"
                  size="large"
                >
                  Connect Google
                </Button>

                <Button
                  icon={<LockOutlined />}
                  className="flex items-center gap-2 w-full sm:w-auto"
                  type="default"
                  size="large"
                >
                  Connect OAuth (Code Flow)
                </Button>
              </div>
            </div>
          </TabPane>

          <TabPane tab="Settings" key="settings">
            {isEditing ? (
              <Form
                layout="vertical"
                className="max-w-md"
                form={form}
                onFinish={handleSave}
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[{ required: true, message: "Username is required" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Telephone"
                  name="phone"
                  rules={[{ required: true, message: "Phone is required" }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    // { required: true, message: "Password is required" },
                    { type: "password", message: "Enter a valid password" },
                  ]}
                >
                  <Input.Password placeholder="**********" />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  dependencies={["password"]}
                  rules={[
                    // { required: true, message: "Please confirm your password" },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          new Error("Passwords do not match!")
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password placeholder="**********" />
                </Form.Item>

                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<SaveOutlined />}
                  >
                    Save Changes
                  </Button>
                  <Button
                    danger
                    onClick={handleCancel}
                    icon={<CloseOutlined />}
                  >
                    Cancel
                  </Button>
                </Space>
              </Form>
            ) : isLoading || isFetching ? (
              <div>Loading...</div>
            ) : (
              <div className="text-gray-700 space-y-2">
                <p>
                  <strong>Username:</strong> {userData?.username}
                </p>
                <p>
                  <strong>Email:</strong> {userData?.email}
                </p>
                <p>
                  <strong>Role: </strong>
                  {userData?.role}
                </p>
                <p>
                  <strong>Telephone: </strong>
                  {userData?.phone}
                </p>
                <p>
                  <strong>Verified: </strong>
                  {userData?.verified ? (
                    <Tag color="green" size="large">
                      Yes
                    </Tag>
                  ) : (
                    <Tag color="red" size="large">
                      No
                    </Tag>
                  )}
                </p>
              </div>
            )}
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}
