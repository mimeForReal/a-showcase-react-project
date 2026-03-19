import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const SpinnerMini = styled(BiLoaderAlt)`
  height: 1.4rem;
  width: 1.4rem;
  animation: ${rotate} 1.5s infinite linear;
`;

export default SpinnerMini;
