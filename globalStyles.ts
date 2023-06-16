'use client'
import { createGlobalStyle } from 'styled-components';
import './app/globals.css'
 
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    letter-spacing: 0;
  }

  #root, #__next {
    isolation: isolate;
  }

  /* titles */
  h1 {
    font-size: 48px;
    font-weight: bolder;
  }

  h2 {
    font-size: 32px;
    line-height: 80%;
  }

  h3 {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 64px;
    }

    h2 {
      font-size: 48px;
    }

    h3 {
      font-size: 32px;
    }
  }
`;