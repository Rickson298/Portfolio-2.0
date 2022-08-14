import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { animationToggleTheme } from "./animation";
import { ContainerMoon, ContainerSun, StickySun } from "./styles";

export function SunMoonTheme() {
  const [currentTheme, setCurrentTheme] = useState("sun");

  function toggleTheme() {
    currentTheme === "sun" ? setCurrentTheme("moon") : setCurrentTheme("sun");
  }

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {currentTheme === "sun" ? (
          <ContainerSun
            onClick={toggleTheme}
            key="sun"
            {...animationToggleTheme}
          >
            <StickySun top="-15px" left="50%" />
            <StickySun top="45px" left="50%" />
            <StickySun left="-15px" top="50%" horizontal />
            <StickySun left="45px" top="50%" horizontal />
          </ContainerSun>
        ) : (
          <ContainerMoon
            onClick={toggleTheme}
            key="moon"
            {...animationToggleTheme}
          />
        )}
      </AnimatePresence>
      <button style={{ marginTop: "50px" }} onClick={toggleTheme}>
        Trocar de tema
      </button>
    </>
  );
}
