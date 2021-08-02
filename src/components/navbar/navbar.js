import * as React from 'react';
import { Link } from 'gatsby';
import Styled from '@emotion/styled';
import CatMark from '../../icons/cat-mark.svg';

const StyledNavbar = Styled.div`
  background-color: var(--dark-blue, #002138);
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  @media (min-width: 992px) {
    padding: 0 5rem;
  }
`;

const MarkContainer = Styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
  &:visited {
    text-decoration: none;
  }

  & h1 {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
      color: var(--white);
  }
  & img {
    margin-right: 8px;
  }
  
`;

const BackButton = Styled.button`
  padding: .5rem 1rem;
  background-color: var(--white);
  border-radius: 6px;
  color: var(--text-color-body);
  text-decoration: none;
`;

export default function Navbar({currentPage}) {
  return (
    <StyledNavbar>
      <MarkContainer to="/">
        <img src={CatMark} alt="Catopia cat logo" />
        <h1>Catopia!</h1>
      </MarkContainer>
      {currentPage.pathname !== '/' && <BackButton as={Link} to="/">Back</BackButton>}
    </StyledNavbar>
  );
}
