import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { Routes, Route } from "react-router-dom";
import firebase from "./database/firebase";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Form from "./components/Form";
import Map from "./components/Map";
import Results from "./components/Results";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [loadAPI, setLoadAPI] = useState(false);
  const [results, setResults] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [userCoordinates, setUserCoordinates] = useState([43.648209, -79.397858]);
  const [faves, setFaves] = useState([]);
  const [showFaves, setShowFaves] = useState(false);

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
      <NavBar />
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
                  setUserSubmitted={setUserSubmitted}
                  setLoadAPI={setLoadAPI}
                />
                <section className="container">
                  <div className="results-map-container">
                    <Results
                      results={results}
                      userSubmitted={userSubmitted}
                      highlight={highlight}
                      setHighlight={setHighlight}
                      faves={faves}
                      showFaves={showFaves}
                      setShowFaves={setShowFaves}
                    />
                    <Map
                      results={results}
                      setResults={setResults}
                      userCoordinates={userCoordinates}
                      isInFaves={isInFaves}
                      faves={faves}
                      highlight={highlight}
                      showFaves={showFaves}
                      setShowFaves={setShowFaves}
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
      <ScrollToTop />
    </div>
  );
}

export default App;
