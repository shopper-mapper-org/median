import axios from "axios";
import { errorAlert } from "./alerts";

const fetchResults = async (query, coordinates, range = 10000) => {
  try {
    const res = await axios({
      url: "https://www.mapquestapi.com/search/v4/place",
      responseType: "json",
      params: {
        sort: "relevance",
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        circle: [coordinates[1], coordinates[0], range].join(", "),
        q: query,
      },
    });
    return res.data.results;
  } catch (err) {
    console.log(err);
    errorAlert();
  }
};

const fetchRoute = async (from, to) => {
  try {
    const res = await axios({
      url: "https://www.mapquestapi.com/directions/v2/route",
      responseType: "json",
      params: {
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        from: from.join(","),
        to: to.join(","),
      },
    });
    return res.data.route;
  } catch (err) {
    console.log(err);
    errorAlert();
  }
};

const setMiddle = (dataArray) => {
  const curIndex = Math.floor(dataArray.length / 2);

  // if we have an odd length array...
  if (dataArray.length > 0 && dataArray.length % 2) {
    // we have 1 value for the middle
    dataArray[curIndex].isMiddle = true;
  } else if (dataArray.length > 0) {
    // otherwise, we have an even length array & we have 2 values for the middle
    dataArray[curIndex].isMiddle = true;
    dataArray[curIndex + 1].isMiddle = true;
  }
};

export { fetchResults, fetchRoute, setMiddle };
