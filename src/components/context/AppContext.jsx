import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ContextApp = ({ children }) => {
  const [loadAPI, setLoadAPI] = useState(false);
  const [results, setResults] = useState([]);
  const [highlight, setHighlight] = useState([]);
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [userCoordinates, setUserCoordinates] = useState([43.648209, -79.397858]);
  const [faves, setFaves] = useState([]);
  const [showFaves, setShowFaves] = useState(false);
  const [route, setRoute] = useState([]);
  const [showRoute, setShowRoute] = useState(false);
  const [destination, setDestination] = useState(null);
  const [rangeValues, setRangeValues] = useState([10]);

  return (
    <AppContext.Provider
      value={{
        loadAPI,
        setLoadAPI,
        results,
        setResults,
        highlight,
        setHighlight,
        userSubmitted,
        setUserSubmitted,
        userCoordinates,
        setUserCoordinates,
        faves,
        setFaves,
        showFaves,
        setShowFaves,
        route,
        setRoute,
        showRoute,
        setShowRoute,
        destination,
        setDestination,
        rangeValues,
        setRangeValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextApp;
