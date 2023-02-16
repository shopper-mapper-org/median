import React, { useState, useEffect, useRef } from "react";
import { fetchResults, fetchAddress } from "../utils/services";
import { errorAlert } from "../utils/alerts";

const Form = ({ setUserCoordinates, setResults, userCoordinates, setUserQuery, setLoadAPI }) => {
  const [queryInput, setQueryInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  // const [userSubmit, setUserSubmit] = useState("");

  const formRef = useRef(null);

  // set button refs to reset focus after click
  const searchButtonRef = useRef(null);
  const gpsButtonRef = useRef(null);

  useEffect(() => {
    const psLocation = window.placeSearch({
      key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
      container: formRef.current.querySelector("#location"),
      useDeviceLocation: true,
    });
    psLocation.on("change", (e) => {
      console.log(e);
      setLocationInput(e.result.value);
      setUserCoordinates([e.result.latlng.lat, e.result.latlng.lng]);
      psLocation.setVal(e.result.value);
      psLocation.close();
    });
    psLocation.on("clear", (e) => {
      setLocationInput("");
    });
    const psQuery = window.placeSearch({
      key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
      container: formRef.current.querySelector("#query"),
      useDeviceLocation: true,
      collection: ["category", "franchise"],
    });
    psQuery.on("change", (e) => {
      console.log(e);
      setQueryInput(e.result.value);
      psQuery.setVal(e.result.value);
      psQuery.close();
    });
    psQuery.on("clear", (e) => {
      setQueryInput("");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const handleLocInput = (event) => {
  //   setLocationInput(event.target.value);
  // };

  // const handleQueryInput = (event) => {
  //   setQueryInput(event.target.value);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserQuery(queryInput);

    // set loading state
    setLoadAPI(true);
    // setUserSubmit(locationInput);
    const getResults = async () => {
      const fetchedResults = await fetchResults(queryInput, userCoordinates);
      setResults(fetchedResults);
      setLoadAPI(false); // done loading!
    };
    getResults();

    // and remove focus
    searchButtonRef.current.blur();
  };

  const handleGeolocationClick = () => {
    // geolocation
    const locationContainer = document.querySelector("#location");
    if ("geolocation" in navigator) {
      // set loading
      setLoadAPI(true);

      // then set location based on device location
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          // set user coordinates
          const geoLatitude = pos.coords.latitude;
          const geoLongitude = pos.coords.longitude;
          setUserCoordinates([geoLatitude, geoLongitude]);
          // set user location using coordinates
          const getAddress = async () => {
            const fetchedAddress = await fetchAddress(geoLatitude, geoLongitude);
            setLocationInput(fetchedAddress);
            const psLocation = window.placeSearch({
              key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
              container: locationContainer,
              useDeviceLocation: true,
            });
            psLocation.setVal(fetchedAddress);
            setLoadAPI(false); // done loading!
          };
          getAddress();
        },
        (err) => {
          errorAlert(err.message);
        }
      );
    } else {
      errorAlert("No geolocation object found");
    }

    // and remove focus
    gpsButtonRef.current.blur();
  };

  return (
    <>
      <section className="container">
        {/* Placeholder, change to desired text */}
        <form
          className="form-container"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <div className="location-container">
            <label htmlFor="location">Enter your Location or Starting Point</label>
            <input
              type="text"
              id="location"
              placeholder="Enter Location"
              defaultValue={locationInput}
              required
            ></input>
          </div>
          <div className="query-container">
            <label htmlFor="query">Try Searching for an Attraction <span>(e.g Museum, Restaurant, etc..)</span></label>
            <input
              type="text"
              id="query"
              placeholder="Enter Attraction"
              defaultValue={queryInput}
              required
            ></input>
          </div>
          <div className="button-container">
            <button
              type="submit"
              ref={searchButtonRef}
            >
              Search
            </button>
            <button
              type="button"
              onClick={handleGeolocationClick}
              ref={gpsButtonRef}
            >
              Use GPS location
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
