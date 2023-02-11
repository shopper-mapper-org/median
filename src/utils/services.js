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

export { fetchResults };
