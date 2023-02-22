import React from "react";
import { Routes, Route, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Main from "./Main";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage";

const RouteAnimation = () => {
  const location = useLocation();

  return (
    <div className="main">
      <AnimatePresence>
        <Routes
          location={location}
          key={location.id}
        >
          <Route
            path="/"
            element={<Main />}
          />
          <Route
            path="/About"
            element={<About />}
          />
          <Route
            path="/Contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default RouteAnimation;
