import type { NextPage } from "next";
import Layout from "@components/Layout";
import ProtectedRoute from "@components/ProtectedRoute";

import Dashboard from "./Dashboard";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Dashboard">
        <Dashboard />
      </Layout>
    </>
  );
};

export default Home;
