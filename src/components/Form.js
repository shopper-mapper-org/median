import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import { fetchResults } from '../utils/services';

const Form = ({ setUserCoordinates, setResults, userCoordinates, setUserQuery }) => {

  const [locationInput, setLocationInput] = useState("");
  const [queryInput, setQueryInput] = useState("");
  // const [userSubmit, setUserSubmit] = useState("");

  useEffect(() => {
    const psLocation = window.placeSearch({
      key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
      container: document.querySelector("#location"),
      useDeviceLocation: true,
    });
    psLocation.on("change", (e) => {
      console.log(e);
      setLocationInput(e.result.value);
      setUserCoordinates([e.result.latlng.lat, e.result.latlng.lng]);
      // psLocation.setVal(e.result.value);
      // psLocation.close();
    });
    const psQuery = window.placeSearch({
      key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
      container: document.querySelector("#query"),
      useDeviceLocation: true,
      collection: ["category", "franchise"],
    });
    psQuery.on("change", (e) => {
      console.log(e);
      setUserQuery(e.result.value);
      // psQuery.setVal(e.result.value);
      // psQuery.close();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if(userCoordinates.length === 2){
  //     const getResults = async () => {
  //       const fetchedResults = await fetchResults(queryInput, userCoordinates);
  //       setResults(fetchedResults);
  //     };
  //     console.log('Getting Results');
  //     getResults();
  //   }
  // }, [userCoordinates])

  // const getLocation = async () => {
  //   const res = await axios({
  //     url: `http://www.mapquestapi.com/geocoding/v1/address`,
  //     params: {
  //       key: 'gPUrgaMSl0DswT2EV39KejByUmEIpNI8',
  //       location: locationInput
  //     }
  //   })
  //   const coordinates = [res.data.results[0].locations[0].displayLatLng.lat, res.data.results[0].locations[0].displayLatLng.lng];
  //   console.log (coordinates);
  //   setUserCoordinates(coordinates);
  // }

  const handleLocInput = (event) => {
    setLocationInput(event.target.value);
  }

  const handleQueryInput = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // setUserSubmit(locationInput);
    const getResults = async () => {
      const fetchedResults = await fetchResults(queryInput, userCoordinates);
      setResults(fetchedResults);
    };
    getResults();
  }


  return (
    <>
      <section className="container">
        {/* Placeholder, change to desired text */}
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="location-container">
            <label htmlFor="location">Enter your Location or Starting Point</label>
            <input 
              type="text" 
              id="location" 
              placeholder="Enter Location" 
              value={locationInput} 
              onChange={handleLocInput} 
              required>
            </input>
          </div>
          <div className="query-container">
            <label htmlFor="query">Try Searching for an Attraction (e.g Museum, Restaurant, etc..)</label>
            <input 
              type="text" 
              id="query" 
              placeholder="Enter Attraction" 
              value={queryInput} 
              onChange={handleQueryInput} 
              required>
            </input>
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
