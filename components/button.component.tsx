import styled from 'styled-components';

const StyledButton = styled.button`
  appearance: none;
  border: none;
  background: var(--color-white);
  border-radius: var(--border-radius);
  font-family: var(--font-family);
  text-transform: uppercase;
  color: var(--color-dark);
  padding: 1.6rem;
  min-width: 250px;
`;

import React, { ReactNode } from 'react';

export const Button = ({
  onClick,
  children,
}: {
  onClick?: () => void;
  children: ReactNode;
}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
