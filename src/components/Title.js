import { useRef, useEffect } from "react";

function Title(title, prevailOnUnmount = false) {
  const defaultTitle = useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(
    () => () => {
      if (!prevailOnUnmount) {
        document.title = defaultTitle.current;
      }
    },
    [prevailOnUnmount]
  );
}

export function Page( { children, ...props }) {
  const titlePre = "Cynthia 💻 - ";

  Title(`${titlePre}${props.title}`);

  return <div>{children}</div>;
}

export default Title;
