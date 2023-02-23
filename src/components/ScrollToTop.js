import React, { useEffect, useState } from "react";
import { BsFillFileArrowUpFill } from "react-icons/bs";

const ScrollToTop = () => {
  const [toTop, setToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setToTop(true);
      } else {
        setToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="scroll-component">
      {toTop && (
        <button
          className="scroll-button"
          title="Scroll to Top"
          onClick={scrollUp}
        >
          <BsFillFileArrowUpFill
            className="scroll-up-icon"
            aria-label="scroll to top button"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
