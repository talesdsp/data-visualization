import { FormControl, NativeSelect } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import API from "../../services/api";
import styles from "./index.module.css";

export default function CountryPicker({ pickCountry }) {
  const [countries, updateCountries] = useState();

  useEffect(() => {
    API.getAllCountries()
      .then(({ data: { countries } }) => {
        updateCountries(countries);
      })
      .catch();
  }, []);

  if (!countries) {
    return null;
  }

  return (
    <FormControl className={styles.FormControl} onChange={pickCountry}>
      <NativeSelect>
        <option value={"global"}>Global</option>;
        {countries.length > 0
          ? countries.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
}
