import * as React from 'react';
import Styled from '@emotion/styled';

const StyledHero = Styled.section`
  background-color: var(--light-blue);
  position: relative;
  display: flex;
  height: 20rem;
  width: 100vw;
  padding: 2rem 2.5rem;

  & .hero__img {
    position: absolute;
  }

  & .hero__img--left {
    display: none;
    @media (min-width: 1056px) {
      display: block;
    }
  }

  & .hero__img--right {
   display: none;
    @media (min-width: 1056px) {
      display: block;
      height: auto;
      right: 0;
      top: -16px;
    }
  }

  & .hero__content {
    align-items: center;
    @media (min-width: 1056px) {
      margin: 0 calc(25% - 2rem);
      flex-shrink: 0;  
    }
  }

  & .hero__content-title {
    color: var(--text-color-headers);
    font-weight: 700;
    font-size: var(--font-size-header-small);
    @media (min-width: 992px) {
      font-size: var(--font-size-header);
      line-height: var(--line-height-header);
    }
  }

  & .hero__content-description {
    color: var(--text-color-body);
    font-size: var(--font-size-large);
    width: 85%;
  }
`;


function Hero({ children }) {
  return (
    <StyledHero className="hero">
      {children}
    </StyledHero>
  );
}

export { Hero };
