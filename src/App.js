import React from 'react';

import { News, Home } from './components';
import styles from './App.module.css';
import { fetchData, fetchNewsData } from './api';
import cov19 from './images/COVID-19.png';
import { Typography } from '@material-ui/core';

class App extends React.Component {
  state = {
    data: {},
    newsData: {},
    country: '',
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    const fetchedNewsData = await fetchNewsData();
    this.setState({ data: fetchedData, newsData: fetchedNewsData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    const fetchedNewsData = await fetchNewsData(country);
    this.setState({
      data: fetchedData,
      newsData: fetchedNewsData,
      country: country,
    });
  };

  render() {
    const { data, newsData, country } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.cov19} src={cov19} alt="COVID-19" />
        <Home
          data={data}
          country={country}
          handleCountryChange={this.handleCountryChange}
        />
        <News data={newsData} />
        <Typography variant="caption" className={styles.copyright}>
          &copy; Abhijeet Palanki. All Rights Reserved.
        </Typography>
      </div>
    );
  }
}

export default App;
