import React, { useState, useEffect, useContext } from "react";
import { setHighlights } from "../utils/services";
import { AppContext } from "./context/AppContext";

const Results = () => {
  const { results, userSubmitted, highlight, setHighlight, faves, showFaves, setShowFaves } = useContext(AppContext);
  // use ID value of the results array to determine highlighted result & keep it in state
  const [highlightID, setHighlightID] = useState([]);

  // whenever we change the highlighted selection, we update results so it links to Map
  useEffect(() => {
    if (showFaves) {
      setHighlights(faves, highlight);
    } else {
      setHighlights(results, highlight);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [highlight]);

  // handle the user making selections in our select box
  const handleSelect = (event) => {
    // set up empty array for highlight IDs and highlight results
    const curHighlightID = [];
    const curHighlight = [];

    // loop through selected options
    const curOptions = Array.from(event.target.selectedOptions);
    curOptions.forEach((option) => {
      // push the ID into our highlighted IDs array
      curHighlightID.push(option.value);

      // match the selected option to our results and push it into our highlighted results
      if (showFaves && faves.length > 0) {
        faves.forEach((fave) => {
          if (fave.id === option.value) {
            curHighlight.push(fave);
          }
        });
      } else {
        results.forEach((result) => {
          if (result.id === option.value) {
            curHighlight.push(result);
          }
        });
      }
    });

    // set our state
    setHighlightID(curHighlightID);
    setHighlight(curHighlight);
  };

  return (
    <div className="results-view">
      <label htmlFor="result-select">
        <h2>Results</h2>
      </label>
      <div className="results">
        {showFaves && faves.length > 0 ? (
          <select
            name="results-select"
            id="results-select"
            multiple
            defaultValue={highlightID}
            onChange={handleSelect}
          >
            {faves.map((fave) => {
              return (
                <option
                  key={fave.id}
                  value={fave.id}
                >
                  {fave.name}, {fave.place.properties.street}, {fave.place.properties.postalCode}
                </option>
              );
            })}
          </select>
        ) : results.length > 0 ? (
          <select
            name="results-select"
            id="results-select"
            multiple
            defaultValue={highlightID}
            onChange={handleSelect}
          >
            {results.map((result) => {
              return (
                <option
                  key={result.id}
                  value={result.id}
                  className={result.isMiddle ? "result-middle" : ""}
                >
                  {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
                </option>
              );
            })}
          </select>
        ) : userSubmitted && results.length === 0 ? (
          <section className="results-error">
            <h3>No Results Found</h3>
            <p>Make sure you're searching for a category (e.g. Museum, Restaurant) and that your search is spelled correctly.</p>
            <p>Or, try adding more information to your starting point, like city, province, or postal code.</p>
          </section>
        ) : (
          <section className="results-error">
            <p>Please input search terms above</p>
          </section>
        )}
      </div>
      <label className="fav-tab">
        <input
          type="checkbox"
          value={showFaves}
          onChange={() => setShowFaves(!showFaves)}
        />{" "}
        Show {showFaves ? "Results" : "Faves"}
      </label>
    </div>
  );
};

export default Results;
