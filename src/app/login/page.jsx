//login page
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ThemedTitleV2 } from "@refinedev/antd";
import { Button, Space, Form, Input, Typography, message } from "antd";
import Link from "next/link";
import "../../assets/css/globals.css";
import { FaLock } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const t = useTranslations("login");
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
    });

    console.log("response", response);
    setLoading(false);
    if (response?.ok) {
      router.push(redirect); // Redirect after successful login
      message.success("Login Successful!");
    } else {
      message.error("Login Failed!");
    }
  };
  return (
    <>
      <div className="flex flex-1 justify-center items-center py-10 md:py-30">
        <Space
          direction="vertical"
          align="center"
          className="bg-white p-8 shadow-lg rounded-lg"
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
            className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
            size="large"
          >
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

            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              size="large"
              loading={loading}
              disabled={loading}
            >
              {t("loginBtn")}
            </Button>
          </Form>

          <Space className="flex flex-col items-center justify-center">
            <Button
              icon={<FcGoogle />}
              className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
              onClick={() => signIn("auth0", { callbackUrl: redirect })}
              size="large"
            >
              {t("socialAuth")}
            </Button>
          </Space>

          {/* Signup Link */}
          <Typography.Text>
            {t("register")}{" "}
            <Link href="/register" style={{ color: "#1890ff" }}>
              {t("registerBtn")}
            </Link>
          </Typography.Text>
        </Space>
      </div>
    </>
  );
}
