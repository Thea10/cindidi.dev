import React from "react";
import { Fade } from "react-awesome-reveal";

let projects = [
    {
        name: "My Portfolio",
        description: "Personal Website",
        tools: ["HTML", "SCSS", "REACT"],
        repo: "https://github.com/Thea10/cindidi.dev",
        hosted: "http://cindidi-dev.netlify.app/",
        resources: ['An array named projects'],
      },
      {
        name: "Unsplash Clone",
        description: "A mini Unsplash.com clone",
        tools: ["HTML", "CSS", "REACT", "REDUX", "TYPESCRIPT"],
        repo: "https://github.com/Thea10/splash_clone",
        hosted: "https://clone-splash.netlify.app/",
        resources: ["UNSPLASH API"],
      },
  {
    name: "Malon Website",
    description: "Marketing Website",
    tools: ["HTML", "SCSS", "REACT"],
    repo: "Private",
    hosted: "http://www.malonglobaltech.com/",
    resources: [],
  },
  {
    name: "Hive Landing",
    description: "Marketing Website",
    tools: ["HTML", "SCSS", "REACT"],
    repo: "https://github.com/Thea10/hive-landing",
    hosted: "http://hive-reach.netlify.app/",
    resources: [],
  },
  {
    name: "Olymp Landing",
    description: "Marketing Website",
    tools: ["HTML", "SCSS", "REACT"],
    repo: "https://github.com/Thea10/olymp-trade",
    hosted: "http://lymp-trade.netlify.app/",
    resources: [],
  },

  {
    name: "Currency Rates API",
    description: "A NodeJS  app for parsing currency rates(enye test)",
    tools: ["JAVASCRIPT", "NODE", "EXPRESS", "HEROKU"],
    repo: "https://github.com/Thea10/rate-test-server",
    hosted: "https://rate-test-server.herokuapp.com/",
    resources: ["PRIVATE API"],
  },
  {
    name: "ScreenPlay NG",
    description: "Web application",
    tools: ["HTML", "SCSS", "ANGULAR 7", "TYPESCRIPT"],
    repo: "Private",
    hosted: "https://screenplayngg.firebaseapp.com/",
    resources: [],
  },
  {
    name: "Unsplash Clone",
    description: "A mini Unsplash.com clone (for a test)",
    tools: ["HTML", "SCSS", "VUE", "VUEX", "MATERIAL UI"],
    repo: "https://github.com/Thea10/splash-clone",
    hosted: "https://splash-clone.netlify.app/",
    resources: ["UNSPLASH API"],
  },
  {
    name: "Movie Nominations App",
    description: "Movie nominations application - Shopify test",
    tools: ["HTML", "SCSS", "REACT", "REDUX", "MATERIAL UI"],
    repo: "https://github.com/Thea10/movie-nominations-app",
    hosted: "https://mymovie-awards.netlify.app/",
    resources: ["IMDB API"],
  },
  {
    name: "Luna Stores",
    description: "Simple Mini Store  ",
    tools: ["HTML", "SCSS", "VUE", "VUEX" ],
    repo: "https://github.com/Thea10/luna",
    hosted: "https://lunahoney-96508.web.app/",
    resources: ["PRIVATE API"],
  },
  {
    name: "Luna API",
    description: "Mini Backend Service for luna stores",
    tools: ["JAVASCRIPT", "NODE", "EXPRESS", "MONGODB"],
    repo: "https://github.com/Thea10/luna-api",
    hosted: "none",
    resources: [ ],
  },
  {
    name: "Acme Stores",
    description: "Simple Mini Store Front",
    tools: ["HTML", "SCSS", "REACT", "REDUX", "MATERIAL UI", "JEST"],
    repo: "https://github.com/Thea10/store-front",
    hosted: "https://acme-stores.netlify.app/",
    resources: ["PRIVATE API"],
  },

  {
    name: "Patient Repository App",
    description: "A patient repository application",
    tools: ["HTML", "SCSS", "REACT", "REDUX", "MATERIAL UI"],
    repo: "https://github.com/Thea10/enye-userDb-frontend",
    hosted: "https://userdb-enyetest.netlify.app/",
    resources: ["PRIVATE API"],
  },
 
  {
    name: "fakeX Stores",
    description: "Simple Mini Store Front",
    tools: ["HTML", "SCSS", "REACT", "REDUX", "MATERIAL UI", "STRIPE"],
    repo: "https://github.com/Thea10/fakeXStore",
    hosted: "https://fakexstore.netlify.app/",
    resources: ["PRIVATE API"],
  },
  
  {
    name: "Git Repos Clone",
    description: "A mini GitHub repositories clone for a test",
    tools: ["HTML", "CSS", "JAVASCRIPT"],
    repo: "https://github.com/Thea10/buycoins_test",
    hosted: "https://nifty-git.netlify.app/",
    resources: ["GIHUB GRAPHQL API"],
  },
];

const More = () => {
  return (
    <Fade className="portfolio px-2 py-5" direction="down" duration={1500}>
      <div className="col-12 col-md-11 p-3   ">
        <div className="mt-5 d-flex align-items-center">
          <span className=" ml-4 desc__text ">
            Quick highlight of some stuff I have worked on
          </span>
        </div>

        <ul className="my-5 row mx-0 col   text-left">
          {projects.map((project, index) => {
            let { name, tools, repo, hosted, resources, description } = project;

            return (
              <li key={index} className="col-lg-5 col-xl-4 p-0  my-4">
                {name}
                <br />
                <span> {description} </span>
                <br />
                <br />
                <span>
                  Tools:
                   {tools.map((tool, index) => (
                    <span className="ml-2" key={index}>
                     
                      {tool}
                      {index < tools.length - 1 ? (
                        <span> , </span>
                      ) : (
                        <span> </span>
                      )}
                    </span>
                  ))}
                </span>
                
                <br />
                <span>
                  Repo:
                  <a
                    className="ml-2"
                    href={`${repo === "Private" ? "#" : repo}`}
                    target="_blank" rel="noreferrer"
                  >
                    {repo}
                  </a>
                </span>
                <br />
                <span>
                  Live:
                  <a
                    className="ml-2"
                    href={`${hosted === 'none' ? "#" : hosted} `}
                    target="_blank" rel="noreferrer"
                  >
                    {hosted}
                  </a>
                </span>
                ;
                <br />
                <span>
                  Resources:
                  {resources.length > 0
                    ? resources.map((resource, index) => (
                        <span className="ml-2" key={index}>
                         
                          {resource}
                          {index < resources.length - 1 ? (
                            <span> , </span>
                          ) : (
                            <span> </span>
                          )}
                        </span>
                      ))
                    : " None"}
                </span>

                <br />
                <br/>

              </li>
            );
          })}
        </ul>

        <div className=" ml-4 desc__text text-left">
           <a href="https://github.com/Thea10" target="_blank" rel="noreferrer"> GITHUB </a>
          </div>
      </div>
     
    </Fade>
  );
};

export default More;
