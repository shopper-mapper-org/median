import React, { useState, useEffect, useRef, useContext } from "react";
import { fetchResults, fetchAddress, fetchCoords } from "../utils/services";
import { errorAlert } from "../utils/alerts";
import { AppContext } from "./context/AppContext";

const Form = () => {
  const { setUserCoordinates, setResults, userCoordinates, setUserSubmitted, setLoadAPI } = useContext(AppContext);

  const [queryInput, setQueryInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  const [psLocation, setPsLocation] = useState(null);
  const [psQuery, setPsQuery] = useState(null);

  // set TRUE if we use the auto-complete coordinates
  const [autoCoords, setAutoCoords] = useState(false);

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
        setAutoCoords(true);
        psLocation.setVal(e.result.value);
        psLocation.close();
      });
      psLocation.on("clear", () => {
        setLocationInput("");
        setAutoCoords(false);
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
    setAutoCoords(false);
  };

  const handleQueryInputChange = (event) => {
    setQueryInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSubmitted(true);
    
    if (!autoCoords) {
      // we need to get the user coordinates
      console.log("fetching coordinates...");
      const getCoords = async () => {
        setLoadAPI(true);
        const fetchedCoords = await fetchCoords(locationInput);
        setUserCoordinates([fetchedCoords.lat, fetchedCoords.lng]);
        setLoadAPI(false);
      }
      getCoords();
    }

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
    if ("geolocation" in navigator) {
      // then set location based on device location
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          // set user coordinates
          const geoLatitude = pos.coords.latitude;
          const geoLongitude = pos.coords.longitude;
          setUserCoordinates([geoLatitude, geoLongitude]);
          setAutoCoords(true);

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
          setAutoCoords(false);
          errorAlert("Timeout. Couldn't access your location");
        },
        // time before timout expires (ms)
        { timeout: 5000 }
      );
    } else {
      setLoadAPI(false);
      setAutoCoords(false);
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
