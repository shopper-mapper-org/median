import React, { useContext, useEffect } from "react";
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
import Loader from "./components/Loader";
import About from "./components/About";
import Contact from "./components/Contact";
import { AppContext } from "./components/context/AppContext";

function App() {
  const { loadAPI, setLoadAPI, setFaves } = useContext(AppContext);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Header />
      {loadAPI ? <Loader /> : null}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form />
              <section className="container">
                <div className="results-map-container">
                  <Results />
                  <Map />
                </div>
              </section>
            </>
          }
        />
        <Route
          path="/About"
          element={<About />}
        />
        <Route
          path="/Contact"
          element={
            <div className="contact-only">
              <Contact />
            </div>
          }
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
