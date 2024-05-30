import React from "react";
import PredictForm from "../Components/PredictForm";

function Landing() {
  return (
    <>
      <div className="h-screen w-screen flex">
        <div className="m-auto">
          <PredictForm />
        </div>
      </div>
    </>
  );
}

export default Landing;
