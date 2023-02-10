import { useState } from 'react';
import React from 'react';

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
  }

  return (
    <>
      <section className="form-container container">
        <form>
          <div className="current-location-container">
            <label htmlFor="location"></label>
            <input type="text" id="location" placeholder="Enter location">
            </input>
          </div>
          <div className="user-query-container">
            <label htmlFor="query"></label>
            <input type="text" id="query" placeholder="Enter Search Query"></input>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
