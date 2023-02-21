import axios from "axios";
import { errorAlert, errorPopup } from "./alerts";

const fetchResults = async (query, coordinates, range = 10) => {
  try {
    const res = await axios({
      url: "https://www.mapquestapi.com/search/v4/place",
      responseType: "json",
      params: {
        sort: "relevance",
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        // location: [coordinates[1], coordinates[0]].join(", "),
        circle: [coordinates[1], coordinates[0], range * 1000].join(", "),
        q: query,
        pageSize: 100,
      },
    });
    const updatedArray = setMiddle(res.data.results);
    return updatedArray;
  } catch (err) {
    errorPopup(err.response.status);
    return [];
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
    errorAlert("Route not found");
  }
};

const fetchAddress = async (lat, lon) => {
  try {
    const res = await axios({
      url: "https://www.mapquestapi.com/geocoding/v1/reverse",
      responseType: "json",
      params: {
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        location: `${lat},${lon}`,
      },
    });
    return res.data.results[0].locations[0].street;
  } catch (err) {
    errorAlert();
  }
};

const fetchCoords = async (loc) => {
  try {
    const res = await axios({
      url: "https://www.mapquestapi.com/geocoding/v1/address",
      responseType: "json",
      params: {
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        location: `${loc}`,
      },
    });

    if (res.data.results[0].locations[0].source === "FALLBACK") {
      return null;
    } else {
      // returns an object that contains lat and lng
      return res.data.results[0].locations[0].latLng;
    }
  } catch (err) {
    errorAlert();
  }
};

const setMiddle = (dataArray) => {
  const curArray = [...dataArray];
  const curIndex = Math.floor(curArray.length / 2);

  // first set all isMiddles to false
  curArray.forEach((data) => {
    data.isMiddle = false;
  });

  // if we have an odd length array...
  if (curArray.length > 0 && curArray.length % 2) {
    // we have 1 value for the middle
    curArray[curIndex].isMiddle = true;
  } else if (curArray.length > 0) {
    // otherwise, we have an even length array & we have 2 values for the middle
    curArray[curIndex].isMiddle = true;
    curArray[curIndex - 1].isMiddle = true;
  }

  return curArray;
};

const setHighlights = (dataArray, highlightArray) => {
  const curArray = [...dataArray];

  // reset all highlights
  curArray.forEach((data) => {
    data.isHighlight = false;
  });

  // go through data
  curArray.forEach((data) => {
    // if data matches the ID in highlight, set isHighlight
    highlightArray.forEach((highlight) => {
      if (data.id === highlight.id) {
        data.isHighlight = true;
      }
    });
  });
  return curArray;
};

export { fetchResults, fetchRoute, fetchAddress, fetchCoords, setMiddle, setHighlights };
