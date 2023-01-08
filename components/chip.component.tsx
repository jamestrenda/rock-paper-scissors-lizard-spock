import Image from 'next/image';
import styled from 'styled-components';

export const StyledChip = styled.span`
  --width: 10rem;
  --border-width: 1.2rem;
  background: var(--color-white);
  border: var(--border-width) solid;
  border-radius: 50%;
  padding: 1.6rem;
  width: var(--width);
  height: var(--width);
  display: block;
  position: relative;
  z-index: 2; // make the losing chip appear on top of the winning chip's shadow

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    background: transparent;
    border-style: solid;
    border-radius: 50%;
    z-index: 1;
  }
  ::before {
    border-width: 0.5rem 0 0 0;
    border-color: hsla(240, 20%, 80%, 0.6);
    width: calc(var(--width) - 2.25rem);
    height: calc(var(--width) - 2rem);
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  &::after {
    width: var(--width);
    height: var(--width);
    top: calc(var(--border-width) * -1);
    left: calc(var(--border-width) * -1);
    border-width: 0 0 0.5rem 0;
    border-color: hsla(0, 0%, 0%, 0.2);
  }

  img {
    width: 3rem !important;
    position: absolute;
    height: auto !important;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    margin: 0 auto;
  }

  &.winner {
    --shadow-color: rgba(255, 255, 255, 0.025);
    box-shadow: 0 0 0 2rem var(--shadow-color), 0 0 0 5rem var(--shadow-color),
      0 0 0 10rem var(--shadow-color);
    z-index: 1;
  }
`;
export const StyledChipContainer = styled.span`
  color: ${(props) => props.color};
`;

export const Chip = ({
  name,
  color,
  winner,
}: {
  name: string;
  color: string;
  winner?: boolean | null;
}) => {
  return (
    <StyledChipContainer color={color}>
      <StyledChip className={winner ? 'winner' : ''}>
        <Image
          src={`/images/icon-${name.toLowerCase()}.svg`}
          alt={name}
          width={100}
          height={100}
        />
      </StyledChip>
    </StyledChipContainer>
  );
};
