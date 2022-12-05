import React from "react";

import { useUserData } from "@nhost/react";

const DashboardApp = () => {
  const user = useUserData();
  console.log(user);
  return <div>DashboardApp</div>;
};

export default DashboardApp;
