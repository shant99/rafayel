import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import "antd/dist/antd.css";
import Section1 from "../components/section1/Section1";
import Section2 from "../components/section2/Section2";
import Section3 from "../components/section3/Section3";
import Section4 from "../components/section4/Section4.jsx";
import Section5 from "../components/section5/Section5";

import { Provider } from "react-redux";
import store from '../redux/store'
import Footer from "../components/footer/Footer";

const Home: NextPage = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Head>
          <title>Stylique Internship</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    </Provider>
  );
};

export default Home;
