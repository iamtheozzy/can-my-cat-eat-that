import * as React from 'react';
import Styled from '@emotion/styled';
import { getImage } from 'gatsby-plugin-image';
import { Card, CardImage } from '../card';
import { Tag } from '../tag';

const StyledGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-auto-rows: minmax(200px, auto);
  grid-gap: 1rem;
  margin-top: 22px;
  padding-bottom: 120px;
`;

function Grid({ data }) {
  return (
    <StyledGrid>
      {data.map(({node}) => {
        const { image, names, toxicity, slug } = node;
        const isToxic = toxicity === null ? false : true;
        const imageSrc = getImage(image)

        return (
          <Card to={`/plants/${slug}`} key={names.scientific} className="card">
            <CardImage image={imageSrc} alt={names.common} />
            <div className="card__content">
              <div className="card__text-content">
              <div className="card__title">{names.common}</div>
              <div className="card__description">{names.scientific}</div>
              </div>
              <Tag isToxic={isToxic}>{isToxic ? 'Toxic' : 'Non-toxic'}</Tag>
            </div>
          </Card>
        );
      })}
    </StyledGrid>
  );
}

export { Grid };
