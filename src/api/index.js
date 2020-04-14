import axios from 'axios';

const url = 'https://covid19.mathdro.id/api/';
const news_url_everything =
  'http://newsapi.org/v2/everything?q=coronavirus&language=en&apiKey=c710b32a3ba24ef8800f06e0fb90158a';
const news_url_headlines =
  'http://newsapi.org/v2/top-headlines?q=coronavirus&apiKey=c710b32a3ba24ef8800f06e0fb90158a';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}countries`);
    return countries;
  } catch (error) {
    console.log(error);
  }
};

export const fetchNewsData = async (country) => {
  let changeableUrl = news_url_everything;

  if (country) {
    changeableUrl = `${news_url_headlines}&country=${country}`;
  } else {
    changeableUrl = `${news_url_everything}`;
  }

  try {
    const {
      data: { articles },
    } = await axios.get(changeableUrl);
    return { articles };
  } catch (error) {
    console.log(error);
  }
};
