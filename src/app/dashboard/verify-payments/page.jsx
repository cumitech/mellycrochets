"use client";
import PageBreadCrumbs from "../../../components/page-breadcrumb/page-breadcrumb.component";
import RequestStatusForm from "../../../components/payment-status/request-status-form.component";

export default function IndexPage() {
  return (
    <>
      <PageBreadCrumbs items={["Dashboard", "Verify Payments"]} />
      <RequestStatusForm />
    </>
  );
}
