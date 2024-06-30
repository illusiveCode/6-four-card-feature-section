import "./global.css";
import Card from "./components/Card";
import supervisorIcon from "./assets/icon-supervisor.svg";
import teamBuilderIcon from "./assets/icon-team-builder.svg";
import karmaIcon from "./assets/icon-karma.svg";
import calculatorIcon from "./assets/icon-calculator.svg";

const App = () => {
  return (
    <div className="h-screen bg-neutral-light-gray">
      <div className="container">
        <div className="max-w-[600px] mx-auto text-center mb-24">
          <h1 className="text-xl font-thin mobile:text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl mb-6 text-neutral-dark-blue">
            Reliable, efficient delivery <br />
            <span className="font-semibold leading-relaxed text-neutral-dark-blue">
              Powered by Technology
            </span>
          </h1>
          <p className="text-lg text-neutral-grayish-blue">
            Our Artificial Intelligence powered tools use millions of project data points to ensure
            that your project is successful
          </p>
        </div>
        <section className="grid grid-cols-1 gap-6 laptop:grid-cols-3">
          <div className="self-center">
            <Card
              title="Supervisor"
              text="Monitors activity to identify project roadblocks"
              borderColour="primary-cyan"
              icon={supervisorIcon}
            />
          </div>

          <div className="box-container flex flex-col gap-6">
            <Card
              borderColour="primary-red"
              title="Team Builder"
              text="Scans our talent network to create the optimal team for your project"
              icon={teamBuilderIcon}
            />
            <Card
              title="Karma"
              text="Regularly evaluates our talent to ensure quality"
              borderColour="primary-orange"
              icon={karmaIcon}
            />
          </div>
          <div className="self-center">
            <Card
              title="Calculator"
              text="Uses data from past projects to provide better delivery estimates"
              borderColour="primary-blue"
              icon={calculatorIcon}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
