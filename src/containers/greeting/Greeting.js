import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
            <div className="button-greeting-div">
                {/* Primary button to view resume online */}
                <a
                  href="https://drive.google.com/file/d/1WrHKPBb4DCyDfBp_HDJqo0u6vzpjf7PZ/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }} // <- removes underline
                >
                  <Button text="View Resume" />
                </a>

                {/* Optional download button if you have a local PDF */}
                {greeting.resumeLink && (
                  <a
                    href={require("./Mahmoud_Tarraf_Flutter_Developer_CV.pdf")}
                    download="Mahmoud_Tarraf_Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download Resume" />
                  </a>
                )}
              </div>

            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Mahmoud Tarraf"
              src={require("../../assets/images/pfp.png")}
              className="greeting-photo"
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
