import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 98.7vw;
  min-height: 400vh;
  padding: 2rem 2rem 5rem;
  background: #111;
`;

export const H1 = styled(motion.h1)`
  margin-bottom: 2rem;
  color: #fff;
`;

export const BoxStyle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #fff;
  border-radius: 4px;
  margin-top: 53rem;
`;
