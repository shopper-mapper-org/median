import React, { useState, useEffect } from 'react';

const Results = ({ results, highlight, setHighlight }) => {
  // using index value of the result array to determine highlighted result
  const [highlightID, setHighlightID] = useState([]);

  // on mount and on change to results, we find the element to highlight
  useEffect(() => {
    const curIndex = Math.floor(results.length / 2);
    const curHighlightID = [];
    const curHighlight = [];

    // if we have an odd length array...
    if (results.length > 0 && results.length % 2) {

      // we have 1 value for the middle
      curHighlightID.push(results[curIndex].id);
      curHighlight.push(results[curIndex]);
    } else if (results.length > 0) {

      // otherwise, we have an even length array & we have 2 values for the middle
      curHighlightID.push(results[curIndex].id);
      curHighlightID.push(results[curIndex + 1].id);
      curHighlight.push(results[curIndex]);
      curHighlight.push(results[curIndex + 1]);
    }

    setHighlightID(curHighlightID);
    setHighlight(curHighlight);
  }, [results]);

  // handle the user making selections in our select box
  const handleSelect = (event) => {

    // set up empty array
    const curHighlight = [];

    // loop through selected options
    const curOptions = Array.from(event.target.selectedOptions);
    curOptions.forEach((option) => {
      curHighlight.push(option.value);
    })

    setHighlight(curHighlight);
  }

  return (
    <div className="results-view">    
      <label htmlFor="result-select"><h2>Results</h2></label>
      <div className="results">
        {(
          (highlight.length > 0) ? 
            <select
              name="results-select"
              id="results-select"
              multiple
              defaultValue={highlightID}
              size={results.length}
              onChange={handleSelect}>
                {results.map((result) => {
                  return (
                    <option key={result.id} value={result.id}>
                      {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
                    </option>
                  )
                })}
            </select> : null
        )}
      </div>
    </div>
  )
};

export default Results;
