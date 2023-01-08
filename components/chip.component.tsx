import Image from 'next/image';
import styled from 'styled-components';

export const StyledChip = styled.span`
  background: var(--color-white);
  border: 0.75rem solid;
  border-radius: 50%;
  padding: 1rem;
  width: 100px;
  height: 100px;
  display: block;
  position: relative;

  img {
    width: 30px !important;
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
    box-shadow: 0 0 0 20px var(--shadow-color), 0 0 0 50px var(--shadow-color),
      0 0 0 100px var(--shadow-color);
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
