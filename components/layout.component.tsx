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
    --color-white: #fff;
    --color-dark: hsl(229, 25%, 31%);
    --color-accent: hsl(229, 64%, 46%);
    --color-header-outline: hsl(217, 16%, 45%);
    --color-rock: hsl(349, 71%, 52%);
    --color-paper: hsl(230, 89%, 62%);
    --color-scissors: hsl(39, 89%, 49%);
    --color-lizard: hsl(261, 73%, 60%);
    --color-spock: hsl(189, 59%, 53%);
    --font-family: ${font.style.fontFamily};
    --shadow-axis: 0 0 3px;
    --shadow-color: rgba(0, 0, 0, 0.8);
    --box-shadow: var(--shadow-axis) 0 var(--shadow-color);
    --text-shadow: var(--shadow-axis) var(--shadow-color);
  }
  html {
    background: radial-gradient(at top, hsl(214, 47%, 23%) 0%,hsl(237, 49%, 15%) 100%) no-repeat;
    
    * {
      box-sizing: border-box;
    }
  }

  html, body {
    min-height: 100vh;
  }
  
  body {
    color: #fff;
    font-family: ${font.style.fontFamily};
    font-weight: 600;
    letter-spacing: 0.1rem; 
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
  }
`;

const StyledLayout = styled.div`
  --padding: 2rem;
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
