import { FC, ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Barlow_Semi_Condensed as Font } from '@next/font/google';
import { Header } from '@/components/header.component';

interface Props {
  children: ReactNode;
}

// If loading a variable font, you don't need to specify the font weight
export const font = Font({
  weight: ['600', '700'],
  subsets: ['latin'],
});

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
  :root {
    --border-radius: 5px;
    --color-white: hsl(0, 0%, 100%);
    --color-dark: hsl(229, 25%, 31%);
    --color-accent: hsl(229, 64%, 46%);
    --color-header-outline: hsl(217, 16%, 45%);
    --color-rock: hsl(349, 71%, 52%);
    --color-paper: hsl(230, 89%, 62%);
    --color-scissors: hsl(39, 89%, 49%);
    --color-lizard: hsl(261, 73%, 60%);
    --color-spock: hsl(189, 59%, 53%);
    --color-shadow: hsla(0, 0%, 0%, .6);
    --color-chip-shadow: hsl(240, 20%, 80%);
    --font-family: ${font.style.fontFamily};
    --font-size-base: 1.6rem;
    --letter-spacing: 0.2rem;
    --shadow-axis: 0 0 3px;
    --color-chip-shadow: hsl(240, 20%, 80%)
    --box-shadow: var(--shadow-axis) 0 var(--color-shadow);
    --text-shadow: var(--shadow-axis) var(--color-shadow);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    background: radial-gradient(at top, hsl(214, 47%, 23%) 0%,hsl(237, 49%, 15%) 100%) no-repeat;
    font-size: 62.5%;
  }

  html, body {
    min-height: 100vh;
  }
  
  body {
    color: #fff;
    font-family: ${font.style.fontFamily};
    font-weight: 600;
    font-size: var(--font-size-base);
    letter-spacing: var(--letter-spacing);); 
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
    font-size: var(--font-size-base);
    letter-spacing: var(--letter-spacing);
  }
`;

const StyledLayout = styled.div`
  --padding: 2.4rem;
  display: grid;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  min-height: calc(100vh - var(--padding) * 2);
  padding: var(--padding);
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <p>Rules</p>
    </StyledLayout>
  );
};
