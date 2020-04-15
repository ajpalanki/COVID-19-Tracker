import React from 'react';

import { Cards, Chart, CountryPicker } from '../../components';
import styles from '../../App.module.css';

const Home = ({ data, country, handleCountryChange }) => {
  return (
    <React.Fragment>
      <div className={styles.lastUpdate}>
        <span className={styles.lastUpdatedOn}>Last Updated On: </span>
        {new Date(data.lastUpdate).toString()}
      </div>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data} />
      <Chart data={data} country={country} className={styles.chart} />
    </React.Fragment>
  );
};

export default Home;
