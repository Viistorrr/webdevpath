import type { NextPage } from "next";
import Layout from "@components/Layout";
import ProtectedRoute from "@components/ProtectedRoute";
import MainStats from "@components/Dashboard/Stats";
import List from "@components/Dashboard/List";

const Home: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Dashboard">
        <ProtectedRoute>
          <main className="flex-1">
            <div className="mt-6 px-4 sm:px-6 lg:px-8">
              <MainStats />
            </div>
            <List />
          </main>
        </ProtectedRoute>
      </Layout>
    </>
  );
};

export default Home;
