import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl, InputLabel } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesApi = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetchCountriesApi();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <InputLabel shrink htmlFor="select-countries">
        Select Country
      </InputLabel>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
        inputProps={{
          name: 'countries',
          id: 'select-countries',
        }}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country) => (
          <option key={country.name} value={country.iso2}>
            {country.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
