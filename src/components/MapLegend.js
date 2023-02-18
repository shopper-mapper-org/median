import React from "react";
import { CgLoadbar } from "react-icons/cg"
// import { locationIcon, resultIcon, middleIcon, faveIcon, highlightIcon, middleHighlight, faveHighlight } from "../utils/icons";

const MapLegend = () => {

    return(
        <>
            <div className="legend-container">
                <h2>Map Legend</h2>
                <div className="info-container">
                    <div className="info">
                        <p>Location Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/marker-md.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Result Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/marker-sm-82A05A-C4E39C.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Hightlighted Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/marker-sm-FF9D7F-FFFFFF.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Middle Highlighted Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/marker-md-5BC5FF-FF9D7F-M.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Middle Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/circle-lg-5BC5FF-M.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Favourites Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/circle-lg-5BC5FF-C4E39C-F.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Favourite Highlighted Icon</p>
                        <div className="icon-container">
                            <img src="https://assets.mapquestapi.com/icon/v2/circle-lg-5BC5FF-FF9D7F-F.png" alt="" />
                        </div>
                    </div>
                    <div className="info">
                        <p>Directions Path</p>
                        <div className="icon-container">
                            <CgLoadbar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MapLegend;