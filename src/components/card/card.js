import * as React from 'react';
import Styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';


const StyledCard = Styled(Link)`
  display: block;
  max-width: 320px;
  max-height: 320px;
  border-radius: 8px;
  margin:1rem;
  border: 1px solid var(--border-color);
  text-decoration: none;
  transition: all 0.2s ease-out;

  &:hover {
    transform: translate(-4px, -4px);
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  }

  &:active {
    transform: translate(0, 0);
    box-shadow: 0px 2px 4px rgba(38, 38, 38, 0.2);

  }

  & .card__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 16px;
    background-color: var(--white);
    border-radius: 0 0 8px 8px;  
  }

  & .card__title {
    font-size: var(--font-size-card-header);
    font-weight: 600;
    color: var(--text-color-headers);
    flex-shrink: 0;
  }

  & .card__description {
    font-size: 13px;
    color: var(--text-color-accent);
    flex-shrink: 0;
  }
`;

const CardImage = Styled(GatsbyImage)`
  width: 100%;
  object-fit: cover;
  object-position: center center;
  height: calc(20rem - 6rem);
  border-radius: 8px 8px 0 0;
`;

function Card({ children , ...props}) {
  return <StyledCard {...props}>{children}</StyledCard>;
}

export { Card, CardImage };
