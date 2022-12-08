import React from "react";

const About = () => {
  return (
    <div id="about" className="pad-lr">
      <div className="aboutme">About Me</div>
      <div className="cont">
        <div className="about-img"></div>
        <div className="about-text">
          <p>
            I am a front-end web developer. I enjoy turning complex problems to
            simple and beautiful interface designs. I also love learning new
            design and logic of coding whether it be HTML, CSS or JavaScript.
          </p>
          <p>
            When I'm not working , I can be reading books, enjoying time with my
            family, listening to podcasts.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default About;
