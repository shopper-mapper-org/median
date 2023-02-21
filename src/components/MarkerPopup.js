import React, { useContext } from "react";
import { Popup } from "react-leaflet";
import DirectionsButton from "./DirectionsButton";
import FaveButton from "./FaveButton";
import { AppContext } from "./context/AppContext";

const MarkerPopup = ({ result }) => {
  const { faves, isInFaves, faveCount } = useContext(AppContext);
  return (
    <Popup>
      <div>
        {result.name}, {result.place.properties.street}, {result.place.properties.postalCode}
      </div>
      <DirectionsButton destination={result} />
      <FaveButton
        result={result}
        isInFaves={isInFaves}
        faves={faves}
      />
      {isInFaves(result.id) && (
        <div className="fav-div">
          Faves: <span className="fav-count">{faveCount(result)}</span>
        </div>
      )}
    </Popup>
  );
};

export default MarkerPopup;
