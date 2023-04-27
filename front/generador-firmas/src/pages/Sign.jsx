import React from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import SignContainer from "../components/SignContainer/SignContainer";
import Cta from "../components/CTA/Cta";

const Sign = () => {
  return (
    <div className="sign">
      <Header />
      <div className="sign__wrapper">
        <Form />
        <SignContainer />
      </div>
      <Cta />
    </div>
  );
};

export default Sign;
