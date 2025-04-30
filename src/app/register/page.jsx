"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ThemedTitleV2 } from "@refinedev/antd";
import { Button, Space, Form, Input, Typography, Divider, message } from "antd";
import Link from "next/link";

import "../../assets/css/globals.css";
import { FaLock } from "react-icons/fa";
import { userService } from "../../service/user.service";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";

export default function Register() {
  const t = useTranslations("register");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const response = await userService.create({
      email: values.email,
      username: values.username,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });

    if (response?.success) {
      router.push("/login");
      message.success("Registration Successful!");
      setLoading(false);
    } else {
      message.error("Registration Failed!");
      setLoading(false);
    }
    setLoading(false);
  };
  return (
    <>
      <div className="flex flex-1 justify-center items-center py-10 md:py-30">
        <Space
          direction="vertical"
          align="center"
          className="bg-white p-8  shadow-lg rounded-lg"
        >
          {/* App Title */}
          <ThemedTitleV2
            collapsed={false}
            wrapperStyles={{
              fontSize: "22px",
              marginBottom: "24px",
            }}
            icon={null}
            text={t("title")}
          />

          {/* Login Form */}
          <Form
            name="login"
            layout="vertical"
            onFinish={onFinish}
            // style={{ width: "320px" }}
            className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
            size="large"
          >
            {/* Full Name */}
            <Form.Item
              label={t("usernameLabel")}
              name="username"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your username" disabled={loading} />
            </Form.Item>

            <Form.Item
              label={t("emailLabel")}
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Enter a valid email!" },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter your email"
                disabled={loading}
              />
            </Form.Item>

            <Form.Item
              label={t("passwordLabel")}
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                size="large"
                placeholder="Enter your password"
                prefix={<FaLock />}
                disabled={loading}
              />
            </Form.Item>

            {/* Confirm Password */}
            <Form.Item
              label={t("confPassLabel")}
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                { required: true, message: "Please confirm your password" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error("Passwords do not match!"));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm password"
                prefix={<FaLock />}
                disabled={loading}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              size="large"
              disabled={loading}
              loading={loading}
            >
              {t("registerBtn")}
            </Button>
          </Form>
          {/* Divider */}
          <Divider>OR</Divider>

          <Space className="flex flex-col items-center justify-center">
            <Button
              icon={<FcGoogle />}
              // style={{ display: "block", width: "100%" }}
              className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
              onClick={() => signIn("auth0")}
              size="large"
            >
              {t("socialAuth")}
            </Button>
          </Space>

          {/* Signup Link */}
          <Typography.Text>
            {t("signin")}{" "}
            <Link href="/login" style={{ color: "#1890ff" }}>
              {t("loginBtn")}
            </Link>
          </Typography.Text>
        </Space>
      </div>
    </>
  );
}
