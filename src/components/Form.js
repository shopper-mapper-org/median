import { useState } from "react";
import React from "react";
import axios from "axios";
import { fetchResults } from "../utils/services";

const Form = ({ setUserCoordinates, setResults, userCoordinates }) => {
  const [locationInput, setLocationInput] = useState("");
  const [queryInput, setQueryInput] = useState("");
  // const [userSubmit, setUserSubmit] = useState("");

  const handleLocInput = (event) => {
    setLocationInput(event.target.value);
  };

  const handleQueryInput = (event) => {
    setQueryInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getLocation();
    // setUserSubmit(locationInput);
    const getResults = async () => {
      const fetchedResults = await fetchResults(queryInput, userCoordinates);
      setResults(fetchedResults);
    };
    getResults();
  };

  const getLocation = async () => {
    const res = await axios({
      url: `http://www.mapquestapi.com/geocoding/v1/address`,
      params: {
        key: "gPUrgaMSl0DswT2EV39KejByUmEIpNI8",
        location: locationInput,
      },
    });
    const coordinates = [res.data.results[0].locations[0].displayLatLng.lat, res.data.results[0].locations[0].displayLatLng.lng];
    console.log(coordinates);
    setUserCoordinates(coordinates);
  };

  return (
    <>
      <section className="container">
        {/* Placeholder, change to desired text */}
        <form
          className="form-container"
          onSubmit={handleSubmit}
        >
          <div className="location-container">
            <label htmlFor="location">Enter your Location or Starting Point</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location"
              value={locationInput}
              onChange={handleLocInput}
              required
            ></input>
          </div>
          <div className="query-container">
            <label htmlFor="query">Try Searching for an Attraction (e.g Museum, Restaurant, etc..)</label>
            <input
              type="text"
              id="query"
              placeholder="Enter Attraction"
              value={queryInput}
              onChange={handleQueryInput}
              required
            ></input>
          </div>
          <div className="button-container">
            <button>Search</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
