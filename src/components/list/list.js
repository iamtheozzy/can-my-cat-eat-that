import * as React from 'react';
import Styled from '@emotion/styled';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Tag } from '../tag';

const StyledContainer = Styled.div`
  margin-top: 22px;
  margin-bottom: 80px;
`;

const StyledListItem = Styled(Link)`
  display: flex;
  align-items: center;
  padding: 16px 0;
  border-top: 1px solid var(--border-color);
  text-decoration: none;

  & .list-item__container {
    flex-shrink: 0;
    margin-right: 1.5rem;
    min-width: 10rem;
  }

  & .list-item__title {
    font-size: var(--font-size-card-header);
    font-weight: 600;
    color: var(--text-color-headers);
  }

  & .list-item__description {
    font-size: 13px;
    font-style: italic;
    color: var(--text-color-accent);
  }

  & .list-item__tag-container {
    min-width: 8rem;
  }

  & .list-item__details {
    color: var(--text-color-body);
`;

const Img = Styled(GatsbyImage)`
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  flex-shrink: 0;
`;

function List({ data }) {
  return (
    <StyledContainer>
      {data.map(({node}) => {
        const { details, image, names, toxicity, slug } = node;
        let isToxic = toxicity === null ? false : true;
        const imageSrc = getImage(image);
        return (
          <StyledListItem to={`/plants/${slug}`} className="list-item" key={names.scientific}>
            <Img image={imageSrc} alt={names.common} />
            <div className="list-item__container">
              <div className="list-item__title">{names.common}</div>
              <div className="list-item__description">{names.scientific}</div>
            </div>
            <div className="list-item__tag-container">
              <Tag isToxic={isToxic} margin="0 1.5rem 0 0">
                {isToxic ? 'Toxic' : 'Non-toxic'}
              </Tag>
            </div>
            <div className="list-item__details">{details}</div>
          </StyledListItem>
        );
      })}
    </StyledContainer>
  );
}

export { List };
