import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* Personalized credit */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by Mahmoud Tarraf")}
        </p>

        {/* Subtle theme attribution */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme inspired by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            DeveloperFolio
          </a>
        </p>

        {/* Optional: Current year for professionalism */}
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          © {new Date().getFullYear()} Mahmoud Tarraf. All rights reserved.
        </p>
      </div>
    </Fade>
  );
}
