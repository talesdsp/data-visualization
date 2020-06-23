import React, { useReducer, useRef, useState } from "react";
import { Dashboard } from "./components";
import { expenses, series1 } from "./data";
import MovingAverage from "./models/moving_average";

const initialState = { wallet: false, credit: false, broker: true, settings: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "wallet":
      return initialState;
    case "broker":
      return { ...initialState, wallet: false, broker: true };
    case "creditCard":
      return { ...initialState, wallet: false, credit: true };
    case "settings":
      return { ...initialState, wallet: false, settings: true };
    default:
      return initialState;
  }
};

const Financial: React.FC = () => {
  const [intervalEMA, setEMA] = useState(0);
  const [intervalSMA, setSMA] = useState(0);

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

  const [currentTab, dispatch] = useReducer(reducer, initialState);

  const [name, setName] = useState<any>("Elisa Montenegro");
  const [email, setEmail] = useState<any>("contact@elisa.com");
  const [, setPassword] = useState<any>("contact@elisa.com");

  const handleClick = (e) => {
    let id = document.activeElement.id;
    dispatch({ type: id });
  };

  return (
    <>
      <Dashboard
        expenses={expenses}
        currentTab={currentTab}
        handleClick={handleClick}
        setPassword={setPassword}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        chart={chart}
        emaEl={emaEl}
        smaEl={smaEl}
        toggleEMA={toggleEMA}
        toggleSMA={toggleSMA}
      />
    </>
  );
};

export default Financial;
