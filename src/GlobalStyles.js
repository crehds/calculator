import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        html {
          font-size: 62.5%;
          font-family: 'Roboto';
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }
      `}
    />
  );
};
