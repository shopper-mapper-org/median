import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./styles/App.scss";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Form from "./components/Form";
import firebase from "./database/firebase";
import { fetchAddress } from "./utils/services";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [results, setResults] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [userCoordinates, setUserCoordinates] = useState([43.648209, -79.397858]);
  const [faves, setFaves] = useState([]);
  const [locationInput, setLocationInput] = useState("");

  const isInFaves = (id) => {
    const res = faves.some((fave) => fave.id === id);
    return res;
  };

  useEffect(() => {
    // firebase setup
    const database = getDatabase(firebase);
    const favesRef = ref(database, "favourites");
    // subscribe to likes
    onValue(favesRef, (res) => {
      const data = res.val();
      const arr = [];
      for (const key in data) {
        arr.push({ key, ...data[key] });
      }
      setFaves(arr);
    });
    // geolocation
    const locationContainer = document.querySelector("#location");
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
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
        };
        getAddress();
      });
    } else {
      console.log("no geolocation");
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Form
              setUserCoordinates={setUserCoordinates}
              userCoordinates={userCoordinates}
              setResults={setResults}
              setUserQuery={setUserQuery}
              locationInput={locationInput}
              setLocationInput={setLocationInput}
            />
            <section className="container">
              <div className="results-map-container">
                <Results
                  results={results}
                  userQuery={userQuery}
                  highlight={highlight}
                  setHighlight={setHighlight}
                />
                <Map
                  results={results}
                  setResults={setResults}
                  userCoordinates={userCoordinates}
                  userQuery={userQuery}
                  isInFaves={isInFaves}
                  faves={faves}
                />
              </div>
            </section> 
          </>
        } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
