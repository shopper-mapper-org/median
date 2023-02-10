import { useState } from 'react';
import React from 'react';
import axios from 'axios';

const Form = () => {

  const [locationInput, setLocationInput] = useState("");
  const [userSubmit, setUserSubmit] = useState("");
  const [queryInput, setQueryInput] = useState("");

  const handleLocInput = (event) => {
    setLocationInput(event.target.value);
  }

  const handleQueryInput = (event) => {
    setQueryInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserSubmit(locationInput);
    console.log('location input: ', locationInput);
    console.log('query input: ', queryInput);
    getData();
  }

  const getData = async () => {
    // https://www.mapquestapi.com/search/v3/prediction?limit=5&collection=address&location=-79.39767202917781,43.64990390157667&q=32 corbett&key=ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7
    const res = await axios({
      url: `https://www.mapquestapi.com/search/v4/place`,
      params: {
        key: 'ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7',
        pageSize: 20,
        location: "-79.39767202917781, 43.64990390157667",
        circle: '-79.39767202917781, 43.64990390157667, 20000',
        sort: 'relevance',
        q: 'sushi'
      }
    })
    // const res = await fetch('https://www.mapquestapi.com/search/v4/place?limit=10&location=-79.39767202917781,43.64990390157667&q=32 corbett&key=ck2OXUAJsF0iz999XGQ62jyXo8AXOVp7&sort=distance')
    // const data = await res.json();
    console.log(res);
  }


  return (
    <>
      <section className="form-container container">
        <form onSubmit={handleSubmit}>
          <div className="current-location-container">
            <label htmlFor="location"></label>
            <input type="text" id="location" placeholder="Enter location" value={locationInput} onChange={handleLocInput} required>
            </input>
          </div>
          <div className="user-query-container">
            <label htmlFor="query"></label>
            <input type="text" id="query" placeholder="Enter Attraction" value={queryInput} onChange={handleQueryInput} required></input>
          </div>
          <div className="button-submit-container">
            <button>Search</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
