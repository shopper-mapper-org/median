import React from "react";
import { CgLoadbar } from "react-icons/cg";
import { locationIcon, resultIcon, middleIcon, faveIcon, highlightIcon, middleHighlight, faveHighlight } from "../utils/icons";

const MapLegend = () => {
  return (
    <div className="legend-container">
      <div className="info-container">
        <div className="info">
          <p>Location</p>
          <div className="icon-container">
            <img
              src={locationIcon.options.iconUrl}
              alt="My Location"
            />
          </div>
        </div>
        <div className="info">
          <p>Result</p>
          <div className="icon-container">
            <img
              src={resultIcon.options.iconUrl}
              alt="Result Marker"
            />
          </div>
        </div>
        <div className="info">
          <p>Selected</p>
          <div className="icon-container">
            <img
              src={highlightIcon.options.iconUrl}
              alt="Selected Result Marker"
            />
          </div>
        </div>
        <div className="info">
          <p>Median Result</p>
          <div className="icon-container">
            <img
              src={middleIcon.options.iconUrl}
              alt="Median Result Marker"
            />
          </div>
        </div>
        <div className="info">
          <p>Median Selected</p>
          <div className="icon-container">
            <img
              src={middleHighlight.options.iconUrl}
              alt="Median Selected Marker"
            />
          </div>
        </div>
        <div className="info">
          <p>Favourite</p>
          <div className="icon-container">
            <img
              src={faveIcon.options.iconUrl}
              alt="Favourite Marker"
            />
          </div>
        </div>
        <div className="info">
          <p>Selected Favourite</p>
          <div className="icon-container">
            <img
              src={faveHighlight.options.iconUrl}
              alt="Selected Favourite Marker"
            />
          </div>
        </div>
        <div className="info">
          <p>Directions</p>
          <div className="icon-container">
            <CgLoadbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
