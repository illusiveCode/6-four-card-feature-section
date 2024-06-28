// import react from "react";
import "./global.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="container">
      <div className="">
        <div className="max-w-[600px] mx-auto text-center mb-24">
          <h1 className="text-5xl leading-snug mb-6">
            Reliable, efficient delivery <br />
            <span className="font-bold">Powered by Technology</span>
          </h1>
          <p className="text-lg">
            Our Artificial Intelligence powered tools use millions of project data points to ensure
            that your project is successful
          </p>
        </div>
        <section className=" grid grid-cols-3 gap-6">
          <div className="self-center">
            <Card
              title="Supervisor"
              text="Monitors activity to identify project roadblocks"
              borderColour={`primary-cyan`}
              icon={"../images/icon-supervisor.svg"}
            />
          </div>

          <div className="box-container flex flex-col gap-6">
            <Card
              title="Team Builder"
              text="Scans our talent network to create the optimal team for your project"
              borderColour="primary-red"
              icon={"../images/icon-team-builder.svg"}
            />
            <Card
              title="Karma"
              text="Regularly evaluates our talent to ensure quality"
              borderColour="primary-red"
              icon={"../images/icon-karma.svg"}
            />
          </div>
          <div className="self-center">
            <Card
              title="Calculator"
              text="Uses data from past projects to provide better delivery estimates"
              borderColour="primary-cyan"
              icon={"../images/icon-calculator.svg"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
