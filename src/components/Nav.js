import React, {useContext} from 'react';
import { ThemeContext } from '../theme/ThemeProvider';

function toggleButton(){
    let btn = document.getElementById('animate-btn');
    btn.classList.toggle('open')
   }

const Nav = () => {

    const { bodyTheme } = useContext(ThemeContext);

    return (
        <nav
        className={`nav text-center navbar-expand-md navbar-light justify-content-between  align-items-center px-2 px-lg-3 px-xl-5 ${bodyTheme.background}`}
        id="head-nav"
      >
        
        <div className="navbar-brand  ">
          <a href="index.html" title="home">
            `<span>C</span> <span className="disappearing__letter"> I </span>  <span className="disappearing__letter">N</span> <span> D</span> <span className="disappearing__letter"> I</span> <span> D</span>  <span className="disappearing__letter"> I </span> `
          </a>
        </div>
        <button
          className="navbar-toggler collapsebtn1 d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleButton}
        >
          <div className="animated-icon1" id="animate-btn">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div
          className="collapse navbar-collapse mb-0 align-items-center justify-content-around  "
          id="navbar"
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
              <a href="#about">About</a>
            </li>
            <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
              <a href="#education">Projects</a>
            </li>
            <li className="nav-link mx-0 my-2 mx-md-3 my-md-0">
              <a href="#faq">Reach Me</a>
            </li>
           </ul>
        </div>
        
  
      </nav>
    )
}

export default Nav
