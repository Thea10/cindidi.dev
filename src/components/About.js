import React from "react";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about row mx-0 align-items-center" id="about">
      <Fade
        className="col-md-6 col-xl-7 p-3 my-2 text-left"
        duration={1000}
        cascade
      >
        <div>
          <div className="d-flex align-items-center">
            <span className="desc__text circle"> 🙃 </span>
            <span className=" ml-4 desc__text "> About </span>
          </div>

          <h5 className="my-4 px-3 desc__text ">
            My name is Cynthia Akinade, I am a software engineer in Lagos,
            Nigeria currently focused on bulding interactive and functional, as
            well as aesthetically pleasing (haha) web applications.
            <br />
            <br />I currently use
            <a href="#skills"> these </a> tools.
            <br />
            <br />
            When I'm not working (re: when I am stressed 😪 ) I read, listen to
            music and think about how to better my skills. I would also love to
            explore AR soon 🙃.
          </h5>
        </div>
      </Fade>
      <Fade className=" p-5 my-2 mx-auto hexed" duration={1000}>
        <h5 className="my-4 desc__text ">
          <NavLink className="desc__text" to="/projects">
            My Portfolio
          </NavLink>
        </h5>
      </Fade>

      <Fade className="col-12 p-3 my-5 text-left" duration={1000} cascade>
        <div id="experience">
          <div className="d-flex align-items-center">
            <span className="desc__text circle"> 🚀 </span>
            <span className=" ml-4 desc__text "> Experience </span>
          </div>

          <div className="my-4 px-3">
            <div className="row mx-0 my-4">
              <Fade
                className="col-sm-7  p-3 mx-auto  tool-cards"
                duration={1000}
                cascade
              >
                <div className="w-100">
                  <div>
                    Layer5 (Via SheCode Africa Contributhon) -
                    Contributor/Mentee
                  </div>
                  <br />
                  <small>April 2021 - present </small>
                  <br />
                  <ul>
                    <li>Contibute to layer5.io</li>
                  </ul>
                  <small> Tools: React, Gatsby </small>
                </div>
                <div className="w-100">
                  <div>Malon - Software Engineer (Frontend)</div>
                  <br />
                  <small>November 2019 - present </small>
                  <ul>
                    <li>Built the company website</li>
                    <li>
                      Collaborated with the team to build Screenplay.ng, a web
                      application targetting screenwriters, producers and
                      proofreaders
                    </li>
                    {/* <li>Built reusable components with Angular</li> */}
                    <li> Collaborating with the team to build churchvest </li>
                  </ul>
                  <small> Tools: React, Angular(8+), Typescript </small>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>

      <Fade className="col-12 p-3 my-5 text-left" duration={1000} cascade>
        <div id="skills">
          <div className="d-flex align-items-center">
            <span className="desc__text circle"> 💻 </span>
            <span className=" ml-4 desc__text "> Stack </span>
          </div>

          <div className="my-4 px-3">
            <span> Core: </span>

            <div className="row mx-0 my-4">
              <Fade className="col-sm-3  tool-cards" duration={1000} cascade>
                <div> Html </div>
                <div> (S)Css </div>
                <div> Javascript </div>
                <div> Typescript </div>
                <div> React </div>
                <div> Angular (7+) </div>
                <div>Jasmine</div>
              </Fade>
            </div>
          </div>
          <div className="my-4 px-3">
            <span> I'm familiar with working with these:</span>

            <div className="row mx-0 my-4">
              <Fade
                className="col-sm-3  tool-cards"
                duration={1500}
                delay={500}
                cascade
              >
                <div>Gatsby</div>
                <div> Vue </div>
                <div>Node </div>
                <div> Jest </div>
                <div> MongoDB </div>
                <div> Express </div>
                <div>C# </div>
              </Fade>
            </div>
          </div>

          <div className="my-5 px-3 text-center">
            <span>
              Need someone with my skillset in your team or for a project?
            </span>

            <div className="row justify-content-center mx-0 my-4">
              <Fade className="col-sm-3  tool-cards" duration={1500} cascade>
                <div>
                  <a href="mailto:olucyakin@gmail.com" id="email">
                    🚀 ME AN EMAIL
                  </a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
