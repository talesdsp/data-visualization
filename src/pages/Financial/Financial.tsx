import { Container } from "@material-ui/core";
import React, { useRef, useState } from "react";
import { AddMovingAverage, CandleStick } from "./components";
import { series } from "./data";
import MovingAverage from "./models/moving_average";

const Financial: React.FC = () => {
  const [intervalEMA, setEMA] = useState(0);
  const [intervalSMA, setSMA] = useState(0);

  const [chart, setChart] = useState(
    new MovingAverage({ series, intervalEMA, intervalSMA }).series
  );

  const smaEl = useRef(null);
  const emaEl = useRef(null);

  const toggleSMA = () => {
    setSMA(+smaEl.current.value);
    setChart(new MovingAverage({ series, intervalEMA, intervalSMA: +smaEl.current.value }).series);
  };
  const toggleEMA = () => {
    setEMA(+emaEl.current.value);
    setChart(new MovingAverage({ series, intervalEMA: +emaEl.current.value, intervalSMA }).series);
  };

  return (
    <div style={{ background: "var(--black)", position: "relative", padding: "3px" }}>
      <Container maxWidth="md">
        <CandleStick chart={chart} />
        <AddMovingAverage emaEl={emaEl} smaEl={smaEl} toggleEMA={toggleEMA} toggleSMA={toggleSMA} />
      </Container>
    </div>
  );
};

export default Financial;
