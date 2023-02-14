import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import "./styles/App.scss";
import Map from "./components/Map";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Results from "./components/Results";
import Form from "./components/Form";
import firebase from "./database/firebase";

function App() {
  const [results, setResults] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [userQuery, setUserQuery] = useState("sushi");
  const [userCoordinates, setUserCoordinates] = useState([43.65107, -79.347015]);
  const [faves, setFaves] = useState([]);

  const isInFaves = (id) => {
    const res = faves.some((fave) => fave.id === id);
    return res;
  };

  useEffect(() => {
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
  }, []);

  return (
    <div className="App">
      <Header />
      <Form
        setUserCoordinates={setUserCoordinates}
        userCoordinates={userCoordinates}
        setResults={setResults}
      />
      <section className="container">
        <div className="results-map-container">
          <Results
            results={results}
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
      <Footer />
    </div>
  );
}

export default App;
