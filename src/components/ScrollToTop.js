import React, { useEffect, useState } from "react";
import { BsFillFileArrowUpFill } from "react-icons/bs";

const ScrollToTop = () => {

    const [toTop, setToTop] = useState(false);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behaviour: "smooth"
        })
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 80) {
                setToTop(true);
            } else {
                setToTop(false);
            }
        })
    }, []);

    return (
        <div className="scroll-component">
            {toTop && (
                <BsFillFileArrowUpFill
                    title="Scroll to Top"
                    onClick={scrollUp}
                    className="scroll-up-button"
                    aria-label="scroll to top button"
                />
            )}
        </div>
    )
}

export default ScrollToTop;