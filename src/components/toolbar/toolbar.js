import * as  React from 'react';
import Styled from '@emotion/styled';

const StyledToolbar = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

function Toolbar({children}) {
  return (
    <StyledToolbar>
      {children}
    </StyledToolbar>
  );
}

export {
  Toolbar
};