import type { NextPage } from "next";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import { Wrapper } from "../components/wrapper";

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <Wrapper>
        <Navbar />
      </Wrapper>
        <Hero />
    </Layout>
  );
};

export default IndexPage;
