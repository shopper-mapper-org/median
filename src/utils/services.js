import axios from 'axios';

const fetchResults = async (query, coordinates, range = 10000) => {
  try {
    const res = await axios({
      url: 'https://www.mapquestapi.com/search/v4/place',
      responseType: 'json',
      params: {
        sort: 'relevance',
        key: '4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH',
        circle: [coordinates[1], coordinates[0], range].join(', '),
        q: query,
      },
    });
    return res.data.results;
  } catch (err) {
    console.log('error: ', err);
  }
};

const fetchRoute = async (from, to) => {
  try {
    const res = await axios({
      url: 'https://www.mapquestapi.com/directions/v2/route',
      responseType: 'json',
      params: {
        key: '4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH',
        from: from.join(','),
        to: to.join(','),
      },
    });
    return res.data.route;
  } catch (err) {
    console.log('error: ', err);
  }
};

export { fetchResults, fetchRoute };
