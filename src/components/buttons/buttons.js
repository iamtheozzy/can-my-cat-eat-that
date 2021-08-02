import * as React from 'react';
import Styled from '@emotion/styled';

const StyledButton = Styled.button`
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  opacity: ${({ opacity }) => opacity};
`;

const StyledButtonGroup = Styled.fieldset`
 & .button-group__label {
    display: block;
    cursor: pointer;
    color: var(--text-color-headers);
    font-size: 13px;
    font-weight: 600;
    margin-bottom: 8px;
    display: inline-block;
    margin-bottom: 8px;
  }

  & .button-group__container {
    display: flex;
    justify-content: flex-end;
  }
`;

function Button({ children , ...props}) {
  return (
    <StyledButton {...props}>
      {children}
    </StyledButton>
  );
}

function ButtonGroup({ children , ...props}) {
  return (
    <StyledButtonGroup {...props} >
      {children}
    </StyledButtonGroup>
  );
}

export { Button, ButtonGroup };