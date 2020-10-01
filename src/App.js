import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Container, H1, BoxStyle } from "./Styles";
import "./App.css";

const BoxVariants = {
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, x: 300 },
};

const Box = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <BoxStyle
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={BoxVariants}
    />
  );
};

function App() {
  return (
    <Container>
      <H1>Scroll down to see the magic 🌟 </H1>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Container>
  );
}

export default App;
