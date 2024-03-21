import React from "react";
import backtotop from "../assets/images/png/arrow.png";

function Backtotop() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            document.getElementById("Top").style.display = "flex";
        } else {
            document.getElementById("Top").style.display = "none";
        }
    });

    function up() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <img id="Top" onClick={up} src={backtotop} alt="back to top icon" />
        </>
    );
}

export default Backtotop;