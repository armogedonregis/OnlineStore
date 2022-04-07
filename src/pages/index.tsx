import type { NextPage } from "next";
import Features from "../components/features";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Services from "../components/services";
import { Wrapper } from "../components/wrapper";

const IndexPage: NextPage = () => {
  return (
    <Layout>
        <Navbar />
        <Hero />
      <Wrapper>
        <Services />
      </Wrapper>
      <Wrapper>
        <Features />
      </Wrapper>
      <Footer />
    </Layout>
  );
};

export default IndexPage;
