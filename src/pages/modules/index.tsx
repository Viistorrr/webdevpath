import { NextPage } from "next";
import Layout from "@components/Layout";
import List from "@components/Modules";

const Modules: NextPage = () => {
  return (
    <>
      <Layout pageTitle="Modulos">
        <List />
      </Layout>
    </>
  );
};

export default Modules;
