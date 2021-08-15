import React from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import About from "./About";
import { Page } from "./Title";

const Main = () => {
  return (
    <Page title={"Home"}>
      <div>
        <header
          className="main__header
    row mx-0 align-items-center px-2 px-sm-3 py-3 px-lg-5"
        >
          <div className="col-11 mt-5 mx-auto px-0 py-5 text-center">
            <Bounce className="mt-5">
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
              <h5 className="desc__text">Frontend Developer</h5>

              <small> Quick links</small>
            </Fade>

            <div className="links p-0 mx-auto  mx-md-0 mt-5  ">
              <Bounce
                cascade
                className="link-bounce  "
                delay={500}
                duration={1000}
              >
                <a
                  href="https://github.com/Thea10"
                  target="_blank"
                  rel="noreferrer"
                  title="Stuff I've worked on are here "
                >
                  <div className="text_content">
                    <i class="fa fa-github"></i>
                    <div className="text_info">
                      <div className="link_type"> GitHub </div>
                      <div className="link_user"> /Thea10 </div>
                    </div>
                  </div>
                </a>
                <a href="#experience" title="experience">
                  <div className="text_content">
                    <i className="fa fa-circle-thin"></i>

                    <div className="text_info">
                      <div className="link_type"> Experience </div>
                      {/* <div className="link_user"> where I've worked </div> */}
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/cynthia-akinade-b522a2119/"
                  title="LinkedIn: Cynthia Akinade"
                >
                  <div className="text_content">
                    <i class="fa fa-linkedin  "></i>
                    <div className="text_info">
                      <div className="link_type"> LinkedIn </div>
                      <div className="link_user"> /cynthia-akinade</div>
                    </div>
                  </div>
                </a>
                <NavLink to="/projects" title="some projects">
                  <div className="text_content">
                    <i className="fa fa-circle-thin"></i>
                    <div className="text_info">
                      <div className="link_type"> Projects </div>
                      <div className="link_user"> /projects</div>
                    </div>
                  </div>
                </NavLink>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1mqLpeWlU-1BBfDidbmiZh6zGzGK09DGF/view?usp=sharinghttps://drive.google.com/file/d/12-9MwJoK-xXG1Cfl9cWQs233kQ0GCYA1/view?usp=sharing"
                  title="View my Resume"
                >
                  <div className="text_content">
                    <i className="fa fa-file-pdf"></i>
                    <div className="text_info">
                      <div className="link_type"> Resume </div>
                      <div className="link_user"> Yikes</div>
                    </div>
                  </div>
                </a>

                <a href="mailto:olucynakin@gmail.com" title="Send me an email">
                  <div className="text_content">
                    <i className="fa fa-envelope  "></i>
                    <div className="text_info">
                      <div className="link_type"> Email </div>
                      <div className="link_user"> olucynakin@gmail.com</div>
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/cynnoq"
                  title="I tweet weird stuff"
                >
                  <div className="text_content">
                    <i className="fa fa-twitter   "></i>
                    <div className="text_info">
                      <div className="link_type"> Twitter </div>
                      <div className="link_user"> /anon </div>
                    </div>
                  </div>
                </a>
              </Bounce>
            </div>
          </div>
        </header>

        <About />
      </div>
    </Page>
  );
};

export default Main;
