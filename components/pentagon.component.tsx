import { LazyMotion, m, domAnimation } from 'framer-motion';
import styled from 'styled-components';

const StyledPentagon = styled(m.svg)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;
  margin: auto;
`;

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      delay: 0.75,
      pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { duration: 0.01 },
    },
  },
};

export const Pentagon = () => {
  return (
    <LazyMotion features={domAnimation}>
      <StyledPentagon
        xmlns="http://www.w3.org/2000/svg"
        width="329"
        height="313"
        initial="hidden"
        animate="visible"
      >
        <m.polygon
          points="170 10,307 122,253 295,76 295,22 122"
          stroke="rgba(0,0,0,.2)"
          fill="none"
          strokeWidth="15"
          variants={draw}
        ></m.polygon>
      </StyledPentagon>
    </LazyMotion>
  );
};
