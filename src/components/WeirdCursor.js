import React, { useContext, useRef, useEffect, useCallback } from "react";
import { ThemeContext } from "../theme/ThemeProvider";


const WeirdCursor = () => {
  const mycursor = useRef(null);
  const {bodyTheme} = useContext(ThemeContext)

  const moveCursor = useCallback(
    (e) => {
      if (mycursor.current) {
        mycursor.current.setAttribute(
          "style",
          `top: ${e.pageY - 10}px; left: ${
            e.pageX - 10
          }px; visibility: visible;`
        );
      }
    },
    []
  );

  const click = useCallback(() => {
    if (mycursor.current) mycursor.current.classList.add("shrink");

    setTimeout(() => {
      if (mycursor.current) return mycursor.current.classList.remove("shrink");
    }, 2500);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", click);
    return () => {
      document.removeEventListener("click", click);
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [click, moveCursor]);

  return <div className={`cursor  ${bodyTheme.background}`} ref={mycursor} />;
};

export default WeirdCursor;
