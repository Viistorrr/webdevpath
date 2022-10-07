import type { NextPage } from "next";
import Layout from "@components/Layout";
import ProtectedRoute from "@components/ProtectedRoute";

import Dashboard from "./Dashboard";

const Home: NextPage = () => {
  return (
    <>
      <ProtectedRoute>
        <Layout pageTitle="Dashboard">
          <Dashboard />
        </Layout>
      </ProtectedRoute>
    </>
  );
};

export default Home;
