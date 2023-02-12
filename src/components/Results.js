import React, { useState, useEffect } from 'react';

const Results = ({ results }) => {
  // using index value of the result array to determine highlighted result
  const [highlightLoc, setHighlightLoc] = useState([]);

  useEffect(() => {
    const curIndex = Math.floor(results.length / 2);

    // if we have an odd length array...
    if (results.length % 2) {

      // we have 1 value for the middle
      setHighlightLoc([curIndex]);
    } else {

      // we have 2 values for the middle
      setHighlightLoc([curIndex, curIndex + 1]);
    }

  }, [results]);

  return (
    <div className="results-view">    
      <h2>Results</h2>
      <div className="results">
        <ol>
          {results.map((result, index) => {
            return (
              (index === highlightLoc[0]) ?
              <li key={index} className='highlight'>
                {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
              </li>
              :
              <li key={index}>
                {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
};

export default Results;
