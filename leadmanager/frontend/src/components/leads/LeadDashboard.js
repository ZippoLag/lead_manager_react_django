import React, { Fragment } from "react";
import AddLeadForm from "./AddLeadForm";
import LeadTable from "./LeadTable";

export default function LeadDashboard() {
  return (
    <Fragment>
      <AddLeadForm />
      <LeadTable />
    </Fragment>
  );
}
