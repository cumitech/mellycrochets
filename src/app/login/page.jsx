"use client";

import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ThemedTitleV2 } from "@refinedev/antd";
import { Button, Space, Form, Input, Typography, Divider } from "antd";
import { SiAuth0, SiFacebook } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

import "../../assets/css/globals.css";
import Footer from "../../components/footer/footer.component";
import { FaLock } from "react-icons/fa";

export default function Login() {
  // const { mutate: login } = useLogin();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    setLoading(false);
    if (response?.ok) {
      router.push("/dashboard"); // Redirect after successful login
    } else {
      alert("Invalid email or password");
    }
    F;
  };
  return (
    <Suspense>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <div className="flex flex-1 justify-center items-center py-10 md:py-30">
          <Space direction="vertical" align="center" className="bg-white p-8">
            {/* App Title */}
            <ThemedTitleV2
              collapsed={false}
              wrapperStyles={{
                fontSize: "22px",
                marginBottom: "24px",
              }}
              title="Hello World"
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
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email!" },
                  { type: "email", message: "Enter a valid email!" },
                ]}
              >
                <Input size="large" placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter your password!" },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter your password"
                  prefix={<FaLock />}
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
                size="large"
              >
                Sign in
              </Button>
            </Form>

            {/* Divider */}
            <Divider>OR</Divider>

            <Space className="flex flex-col items-center justify-center">
              <Button
                icon={<FcGoogle />}
                // style={{ display: "block", width: "100%" }}
                className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
                onClick={() => signIn("google")}
                size="large"
              >
                Google
              </Button>
              <Button
                icon={<SiAuth0 color="#d8452e" />}
                // style={{ display: "block", width: "100%" }}
                className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
                onClick={() => signIn("auth0")}
                size="large"
              >
                Auth0
              </Button>
              <Button
                icon={<SiFacebook color="#0866ff" />}
                // style={{ display: "block", width: "100%" }}
                className="w-xs sm:w-sm md:w-md lg:w-lg xl:w-xl"
                onClick={() => signIn("facebook")}
                size="large"
              >
                Facebook
              </Button>
            </Space>

            {/* Signup Link */}
            <Typography.Text>
              Don&apos;t have an account?{" "}
              <Link href="/register" style={{ color: "#1890ff" }}>
                Sign up
              </Link>
            </Typography.Text>
          </Space>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Suspense>
  );
}
