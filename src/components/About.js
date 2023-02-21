import React from 'react';
import { Link } from 'react-router-dom';
import { motion as m } from "framer-motion"

// import Contact from './Contact';

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
        <section className="about">
          <h2>ABOUT MEDIAN</h2>
          <p><Link to="/">Median</Link> helps you find your new favourite comfort spot! It's not a traditional search-for-a-specific-place kind of map engine -- there are other map engines that do that!</p>
          <p>But if you're tired of being bombarded with recommendations for the latest, trendiest hotspots, we understand that sometimes all you crave is a familiar haunt, a cozy nook that feels like home. That's why we're on a mission to simplify the decision-making process and help you discover those reliable, down-to-earth gems that never fail to hit the spot. Whether it's a restaurant, bar, grocery store, or coffee shop, we've got you covered with the inside scoop on the places that will feel like a warm embrace. Let us help you uncover the hidden treasures that will quickly become your go-to spots.</p>
        </section>
      </m.section>
      {/* <Contact/> */}
    </>
  )
}

export default About;