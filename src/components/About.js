import React from "react";
import { Fade } from "react-awesome-reveal";

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
            Nigeria currently focused on Frontend Web Development. I build the
            client-side of web applications using the required tools.
            <a href="#skills"> here </a>
            <br />
            <br />
            I have been at this since March 2019, some months after my degree
            programme. It has been, and is still, a ride (😶).
            <br />
            <br />
            When I'm not working (re: when I am stressed 😪 ) I read, listen to
            music and think about how to better my skills.
          </h5>
        </div>
      </Fade>
      <Fade className=" p-5 my-2 mx-auto hexed" duration={1000}>
        <h5 className="my-4 desc__text ">
          <a className="desc__text" href="#">
            My Portfolio
          </a>
        </h5>
      </Fade>

      <Fade className="col-12 p-3 my-5 text-left" duration={1000} cascade>
        <div id="skills">
          <div className="d-flex align-items-center">
            <span className="desc__text circle"> 😶 </span>
            <span className=" ml-4 desc__text "> Skills </span>
          </div>

          <div className="my-4 px-3">
            <span> I am vey familiar with the following tools: </span>

            <div className="row mx-0 my-4">
              <Fade className="col-sm-3  tool-cards" duration={1500} cascade>
                <div> HTML </div>
                <div> (S)CSS </div>
                <div> JAVASCRIPT </div>
                <div> TYPESCRIPT </div>
                <div> REACT </div>
                <div> ANGULAR (7+) </div>
                <div> VUE </div>
                <div>NODE </div>
              </Fade>
            </div>
          </div>
          <div className="my-4 px-3">
            <span> I have used the following tools at least twice</span>

            <div className="row mx-0 my-4">
              <Fade className="col-sm-3  tool-cards" duration={1500}  cascade>
                <div> JEST </div>
                <div> MONGO DB </div>
                <div> EXPRESS JS </div>
              </Fade>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default About;
