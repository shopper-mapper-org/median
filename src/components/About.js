import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion"
import { CgLoadbar } from "react-icons/cg"
import { locationIcon, resultIcon, middleIcon, faveIcon, highlightIcon, middleHighlight, faveHighlight } from "../utils/icons";

const About = () => {
  return (
    <>
      <m.section 
        className="container"
        transition={{ duration: 1.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <section className="about-contact-container">
          <section className="about">
            <h2>About Median</h2>
            <p><Link to="/">Median</Link> helps you find your new favourite comfort spot. It's not a traditional search-for-a-specific-place kind of map engine -- there are other map engines that do that!</p>
            <p>But if you're tired of being bombarded with recommendations for the latest, trendiest hotspots, we understand that sometimes all you crave is a familiar haunt, a cozy nook that feels like home. That's why we're on a mission to simplify the decision-making process and help you discover those reliable, down-to-earth gems that never fail to hit the spot. Whether it's a restaurant, bar, grocery store, or coffee shop, we've got you covered with the inside scoop on the places that will feel like a warm embrace. Let us help you uncover the hidden treasures that will quickly become your go-to spots.</p>
            <h3>Legend</h3>
            <section className="legend-icons">
              <div className="info">
                <p>Location</p>
                <div className="icon-container">
                  <img src={locationIcon.options.iconUrl} alt="My Location" />
                </div>
                <span className="description">Your location on the map</span>
              </div>
              <div className="info">
                <p>Result</p>
                <div className="icon-container">
                  <img src={resultIcon.options.iconUrl} alt="Result Marker" />
                </div>
                <span>Search result location pin. Click to get Directions or add to Favourites.</span>
              </div>
              <div className="info">
                <p>Selected</p>
                <div className="icon-container">
                  <img src={highlightIcon.options.iconUrl} alt="Selected Result Marker" />
                </div>
                <span>Selected search result location pin. You may select multiple results.</span>
              </div>
              <div className="info">
                <p>Median Result</p>
                <div className="icon-container">
                  <img src={middleIcon.options.iconUrl} alt="Median Result Marker" />
                </div>
                <span>Median's "most average" result and recommendation! These will always appear at the median (middle) of your result list.</span>
              </div>
              <div className="info">
                <p>Median Selected</p>
                <div className="icon-container">
                  <img src={middleHighlight.options.iconUrl} alt="Median Selected Marker" />
                </div>
                <span>Selected Median result. You may always select multiple results.</span>
              </div>
              <div className="info">
                <p>Favourite</p>
                <div className="icon-container">
                  <img src={faveIcon.options.iconUrl} alt="Favourite Marker" />
                </div>
                <span>Favourite result location. Someone selected this result in the past and clicked "Favourite" to add it to the public list of Favourites!</span>
              </div>
              <div className="info">
                <p>Selected Favourite</p>
                <div className="icon-container">
                  <img src={faveHighlight.options.iconUrl} alt="Selected Favourite Marker" />
                </div>
                <span>Selected Favourite result from the list of Favourites.</span>
              </div>
              <div className="info">
                <p>Directions</p>
                <div className="icon-container">
                  <CgLoadbar />
                </div>
                <span>When you click a Result and then click "Directions", this line will indicate directions from your Location to the Result.</span>
              </div>
            </section>
          </section>
        </section>
      </m.section>
    </>
  )
}

export default About;