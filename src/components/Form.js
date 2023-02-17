import React, { useState, useEffect, useRef } from "react";
import { fetchResults, fetchAddress } from "../utils/services";
import { errorAlert } from "../utils/alerts";

const Form = ({ setUserCoordinates, setResults, userCoordinates, setUserSubmitted, setLoadAPI }) => {
  const [queryInput, setQueryInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const [psLocation, setPsLocation] = useState(null);
  const [psQuery, setPsQuery] = useState(null);

  const formRef = useRef(null);
  // set button refs to reset focus after click
  const searchButtonRef = useRef(null);
  const gpsButtonRef = useRef(null);

  useEffect(() => {
    // set placeSearch instances in state
    setPsLocation(
      window.placeSearch({
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        container: formRef.current.querySelector("#location"),
        useDeviceLocation: true,
      })
    );
    setPsQuery(
      window.placeSearch({
        key: "4cMhcoj1XUqjf6DHUbOG44m4JjBCYrhH",
        container: formRef.current.querySelector("#query"),
        collection: ["category", "franchise"],
      })
    );
  }, []);

  // set placeSearch listeners
  useEffect(() => {
    if (psLocation) {
      psLocation.on("change", (e) => {
        setLocationInput(e.result.value);
        setUserCoordinates([e.result.latlng.lat, e.result.latlng.lng]);
        psLocation.setVal(e.result.value);
        psLocation.close();
      });
      psLocation.on("clear", () => {
        setLocationInput("");
      });
    }
    if (psQuery) {
      psQuery.on("change", (e) => {
        setQueryInput(e.result.value);
        psQuery.setVal(e.result.value);
        psQuery.close();
      });
      psQuery.on("clear", () => {
        setQueryInput("");
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [psLocation, psQuery]);

  const handleLocInputChange = (event) => {
    setLocationInput(event.target.value);
  };

  const handleQueryInputChange = (event) => {
    setQueryInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSubmitted(true);

    const getResults = async () => {
      // set loading state
      setLoadAPI(true);
      const fetchedResults = await fetchResults(queryInput, userCoordinates);
      setResults(fetchedResults);
      setLoadAPI(false); // done loading!
    };
    getResults();

    // and remove focus
    searchButtonRef.current.blur();
  };

  const handleGeolocationClick = () => {
    // set loading
    setLoadAPI(true);

    // geolocation
    console.log("geolocating");
    if ("geolocation" in navigator) {
      console.log("navigator");
      // then set location based on device location
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          console.log("getting");
          // set user coordinates
          const geoLatitude = pos.coords.latitude;
          const geoLongitude = pos.coords.longitude;
          setUserCoordinates([geoLatitude, geoLongitude]);

          // set user location using coordinates
          const getAddress = async () => {
            const fetchedAddress = await fetchAddress(geoLatitude, geoLongitude);
            psLocation.setVal(fetchedAddress);
            setLocationInput(fetchedAddress);
            setLoadAPI(false); // done loading!
          };
          getAddress();
        },
        (err) => {
          setLoadAPI(false);
          console.log(err.message);
          errorAlert("Timeout. Couldn't access your location");
        },
        // time before timout expires (ms)
        { timeout: 5000 }
      );
    } else {
      setLoadAPI(false);
      errorAlert("No geolocation object found");
      setLoadAPI(false);
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
              value={locationInput}
              onChange={handleLocInputChange}
              required
            ></input>
          </div>
          <div className="query-container">
            <label htmlFor="query">
              Search for an Attraction <span>(e.g. Museum, Restaurant, etc.)</span>
            </label>
            <input
              type="text"
              id="query"
              placeholder="Enter Attraction"
              value={queryInput}
              onChange={handleQueryInputChange}
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
              Use My Location
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
