import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import SectionDivan from "../../../components/Site/SectionDivan/SectionDivan";
import Awesome from "../../../components/Site/Awesome/Awesome";
import Subscribe from "../../../components/Site/Subscribe/Subscribe";
import Partners from "../../../components/Site/Partners/Partners";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <SectionDivan />
      <Awesome/>
      <Subscribe/>
      <Partners/>
    </>
  );
};

export default Home;
