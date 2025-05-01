import { ThemedLayoutV2 } from "@refinedev/antd";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";
import authOptions from "../../lib/options";
import { Header } from "../../components/header";
import { Authenticated } from "@refinedev/core";
import { Col, Row } from "antd";
import Login from "../register/page";
import { NavigateToResource } from "@refinedev/nextjs-router";
import { Title } from "../../components/header/title";

export default async function Layout({ children }) {
  const data = await getData();

  if (!data.session?.user) {
    return redirect("/login");
  }

  return (
    <html lang="en">
      <body>
        <ThemedLayoutV2 Header={Header} Title={Title}>
          <Row justify={"center"} align={"top"}>
            <Col xs={22} md={18}>
              <Authenticated key="home-page" fallback={<Login />}>
                {children}
                <NavigateToResource />
              </Authenticated>
            </Col>
          </Row>
        </ThemedLayoutV2>
      </body>
    </html>
  );
}

async function getData() {
  const session = await getServerSession(authOptions);
  return {
    session,
  };
}
