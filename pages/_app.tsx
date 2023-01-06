import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { Barlow_Semi_Condensed as Font } from '@next/font/google';

// If loading a variable font, you don't need to specify the font weight
const font = Font({
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
    --shadow-axis: 0 0 3px;
    --shadow-color: rgba(0, 0, 0, 0.8);
    --box-shadow: var(--shadow-axis) 0 var(--shadow-color);
    --text-shadow: var(--shadow-axis) var(--shadow-color);
  }
  html {
    background: radial-gradient(at top, hsl(214, 47%, 23%) 0%,hsl(237, 49%, 15%) 100%) no-repeat;
    min-height: 100vh;
  }
  
  body {
    color: #fff;
    padding: 2rem;
    font-family: ${font.style.fontFamily};
    font-weight: 600;
  }
`;
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
