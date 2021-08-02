import * as  React from 'react';
import Styled from '@emotion/styled';

const Main = Styled.main`
  height: 100vh;
  padding: 2rem 2.5rem;
`;

function MainPage({ children }) {
  return (
    <Main>
      {children}
    </Main>
  );
}

export {
  Main,
  MainPage
};