import React, { useContext, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import firebase from "./database/firebase";
import "./styles/App.scss";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Loader from "./components/Loader";
import RouteAnimation from "./components/RouteAnimation";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
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
      <RouteAnimation />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
