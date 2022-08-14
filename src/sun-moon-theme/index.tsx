import { AnimatePresence, motion } from "framer-motion";
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
          <motion.div key="sun" {...animationToggleTheme}>
            <ContainerSun onClick={toggleTheme}>
              <StickySun top="-15px" left="50%" />
              <StickySun top="45px" left="50%" />
              <StickySun left="-15px" top="50%" horizontalPosition />
              <StickySun left="45px" top="50%" horizontalPosition />
            </ContainerSun>
          </motion.div>
        ) : (
          <motion.div key="moon" {...animationToggleTheme}>
            <ContainerMoon onClick={toggleTheme} />
          </motion.div>
        )}
      </AnimatePresence>
      <button style={{ marginTop: "50px" }} onClick={toggleTheme}>
        Trocar de tema
      </button>
    </>
  );
}
