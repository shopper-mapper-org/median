import React, { useState, useEffect } from 'react';
import { setMiddle, setHighlights } from '../utils/services';

const Results = ({ results, userQuery, highlight, setHighlight }) => {
  // use ID value of the results array to determine highlighted result & keep it in state
  const [highlightID, setHighlightID] = useState([]);

  // on mount and on change to results, we find the element to highlight
  useEffect(() => {
    setMiddle(results);
    console.log("userQuery: ", userQuery);
    console.log("results: ", results);
  }, [results]);

  // whenever we change the highlighted selection, we update results so it links to Map
  useEffect(() => {
    setHighlights(results, highlight);
  }, [highlight])

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
      results.forEach((result) => {
        if (result.id === option.value) {
          curHighlight.push(result);
        }
      })
    })

    // set our state
    setHighlightID(curHighlightID);
    setHighlight(curHighlight);
  }

  return (
    <div className="results-view">    
      <label htmlFor="result-select"><h2>Results</h2></label>
      <div className="results">
        {(
          (results.length > 0) ? 
            <select
              name="results-select"
              id="results-select"
              multiple
              defaultValue={highlightID}
              size={results.length}
              onChange={handleSelect}>
                {results.map((result) => {
                  return ( 
                    <option key={result.id} value={result.id}
                    className={(result.isMiddle) ? 'result-middle' : ''}>
                      {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
                    </option>
                  )
                })}
            </select>
            : (userQuery && results.length === 0) ? 
            <section className="results-error">
              <h3>No Results Found</h3>
              <p>Make sure your search is spelled correctly. Or, try adding more information, like city, province, or postal code.</p>
            </section>
            :
            <section className="results-error">
              <p>Please input search terms</p>
            </section>
        )}
      </div>
    </div>
  )
};

export default Results;
