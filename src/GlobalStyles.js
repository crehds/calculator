import { Global, css } from '@emotion/react';

export const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          padding: 0;
          border: 0;
        }
        html {
          font-size: 62.5%;
        }

        ul {
          list-style: none;
        }

        a {
          text-decoration: none;
        }

        body {
          background-color: gray;
        }
      `}
    />
  );
};
