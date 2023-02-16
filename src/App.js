import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./styles/App.scss";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Form from "./components/Form";
import firebase from "./database/firebase";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  const [loadAPI, setLoadAPI] = useState(false);
  const [results, setResults] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [userCoordinates, setUserCoordinates] = useState([43.648209, -79.397858]);
  const [faves, setFaves] = useState([]);

  const isInFaves = (id) => {
    const res = faves.some((fave) => fave.id === id);
    return res;
  };

  useEffect(() => {
    // we're loading!
    setLoadAPI(true);

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

      // done loading
      setLoadAPI(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {loadAPI ? (
        <div className="loader-container">
          <div className="load-animation"></div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form
                  setUserCoordinates={setUserCoordinates}
                  userCoordinates={userCoordinates}
                  setResults={setResults}
                  setUserQuery={setUserQuery}
                  setLoadAPI={setLoadAPI}
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
                      highlight={highlight}
                    />
                  </div>
                </section>
              </>
            }
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
