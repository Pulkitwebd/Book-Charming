import {useState, useEffect } from "react";

const TrimmedString = ({data}) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  let trimmedString;
  if (windowSize.width > 0 && windowSize.width <= 600) {
    trimmedString = data.content.substring(0, 80);
  } else if (windowSize.width > 600 && windowSize.width <= 900) {
    trimmedString = data.content.substring(0, 250);
  } else if (windowSize.width > 900 && windowSize.width <= 1200) {
    trimmedString = data.content.substring(0, 400);
  } else {
    trimmedString = data.content.substring(0, 200);
  }

  var string = trimmedString.substring(
    0,
    Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
  );

  return string;
};

export default TrimmedString;
