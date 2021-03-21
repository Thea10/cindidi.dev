import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import About from "./About";

const Main = () => {
  return (
    <div>
      <header
        className="main__header
    row mx-0 align-items-center px-2 px-sm-3 py-3 px-lg-5"
      >
        <div className="col-lg-7 mt-5 px-0 py-5 text-center text-sm-left">
          <Bounce className="mt-5">
            {/* <div
            className="btn btn-deep-purple w-25 mb-5 "
            style={{ cursor: "none", pointerEvents: "none" }}
          >
            Hiii
          </div> */}
            <span>Hiii 👋</span>
          </Bounce>
          <Fade
            className="mt-5"
            direction="up"
            cascade
            delay={500}
            duration={1000}
          >
            <h1 className="head__text mb-4"> I'm Cynthia</h1>
            <h5 className="desc__text"> A Front end developer</h5>
          </Fade>

          <div className="links row col-8 col-sm-7 p-0 mx-auto  mx-md-0 mt-5 justify-content-center justify-content-sm-between">
            <Bounce cascade className="my-5" delay={500} duration={1000}>
              <a
                href="https://github.com/Thea10"
                target="_blank" rel="noreferrer"
                className="m-3 "
              >
                <i
                  class="fa fa-github"
                  title="Stuff I've worked on are here "
                ></i>
              </a>
              <a   target="_blank" rel="noreferrer" href="https://twitter.com/cynnoq" className="m-3 ">
                <i title="I tweet weird stuff" class="fa fa-twitter   "></i>
              </a>
              <a href="mailto:olucyakin@gmail.com" className="m-3 ">
                <i title="Send me an email" class="fa fa-envelope  "></i>
              </a>

              <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/cynthia-akinade-b522a2119/"className="m-3 ">
                <i title="LinkedIn: Cynthia Akinade" class="fa fa-linkedin  "></i>
              </a>
              

              <a  target="_blank" rel="noreferrer"   href="https://drive.google.com/file/d/1FgbSYwfn-BA-sSVRrwh4xdR4w44jv1hb/view?usp=sharing" className="m-3 ">
                <i title="View my Resume" class="fa fa-file-pdf"></i>
              </a>
              <NavLink to="/projects"> <i title="some projects" class="fa fa-circle-thin"  ></i> </NavLink>
            </Bounce>
          </div>
        </div>
      </header>

      <About />
    </div>
  );
};

export default Main;
