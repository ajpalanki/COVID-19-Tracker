import React from 'react';

import { Cards, Chart, CountryPicker, News } from './components';
import styles from './App.module.css';
import { fetchData, fetchNewsData } from './api';
import cov19 from './images/COVID-19.png';

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
        <div>
          <span className={styles.lastUpdatedOn}>Last Updated On: </span>
          {new Date(data.lastUpdate).toString()}
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} className={styles.chart} />
        {/* <News data={newsData} /> */}
      </div>
    );
  }
}

export default App;
