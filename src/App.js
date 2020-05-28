import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";
import API from "./services/api";

const App = () => {
  const [state, updateState] = useState();
  const [country, setCountry] = useState("");

  useEffect(() => {
    API.getTotalCases()
      .then(({ data }) => {
        updateState(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const pickCountry = async (event) => {
    try {
      const name = event.target.value;
      if (name === "global") {
        setCountry(null);
        return;
      }

      const { data } = await API.getOneCountry(name);

      setCountry(name);
      updateState(data);
    } catch (error) {}
  };

  return (
    <div className={styles.container}>
      <Cards data={state} />
      <CountryPicker pickCountry={pickCountry} />
      <Chart data={state} country={country} />
    </div>
  );
};

export default App;
