import React, { useRef, useState } from "react";
import { Dashboard } from "./components";
import HomeBroker from "./components/HomeBroker/HomeBroker";
import { series1 } from "./data";
import MovingAverage from "./models/moving_average";

const Financial: React.FC = () => {
  const [intervalEMA, setEMA] = useState(0);
  const [intervalSMA, setSMA] = useState(0);
  const [broker, setBroker] = useState(false);

  const [chosenChart, setChosenChart] = useState(series1);

  const [chart, setChart] = useState(
    new MovingAverage({ series: chosenChart, intervalEMA, intervalSMA }).series
  );

  const smaEl = useRef(null);
  const emaEl = useRef(null);

  const toggleSMA = () => {
    setSMA(+smaEl.current.value);
    setChart(
      new MovingAverage({ series: chosenChart, intervalEMA, intervalSMA: +smaEl.current.value })
        .series
    );
  };
  const toggleEMA = () => {
    setEMA(+emaEl.current.value);
    setChart(
      new MovingAverage({ series: chosenChart, intervalEMA: +emaEl.current.value, intervalSMA })
        .series
    );
  };

  const [dashboard, setDashboard] = useState<boolean>(true);
  const [container, setContainer] = useState<any>("");

  const [name, setName] = useState<any>("Elisa Montenegro");
  const [email, setEmail] = useState<any>("contact@elisa.com");
  const [, setPassword] = useState<any>("contact@elisa.com");

  const handleClick = () => {
    let id = document.activeElement.id;
    if (id === "wallet") {
      setDashboard(true);
    } else {
      setDashboard(false);
      setContainer(id);
    }
  };

  return (
    <>
      <Dashboard
        container={container}
        dashboard={dashboard}
        handleClick={handleClick}
        setBroker={setBroker}
        setPassword={setPassword}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      />

      {broker && (
        <HomeBroker
          chart={chart}
          emaEl={emaEl}
          smaEl={smaEl}
          toggleEMA={toggleEMA}
          toggleSMA={toggleSMA}
        />
      )}
    </>
  );
};

export default Financial;
