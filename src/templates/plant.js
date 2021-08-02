import * as React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Styled from '@emotion/styled';
import { graphql } from 'gatsby';
import { Layout } from '../components/layout';
import { Tag } from '../components/tag';
import { Helmet } from 'react-helmet';

const Main = Styled.div`
  height: 100vh;
  padding: 2rem 2.5rem;
  display: flex;
  justify-content: center;

  & .container {
    width: 800px;
  }

  & .line-break {
    height: 1px;
    width: 100%;
    background-color: var(--border-color);
    margin-bottom: 40px;
    border: 0;
    overflow: hidden;
  }

  .card {
    padding: 40px;
    display: flex;
    justify-content: space-between;

    & .card__title-container {
      margin-bottom: 35px;
      
      &__title {
        font-size: var(--plant-page-title);
        font-weight: 700;
        color: var(--text-color-headers);
        flex-shrink: 0;
        margin-bottom: 8px;
      }
      
      &__description {
        font-size: var(--font-size-medium);
        color: var(--text-color-accent);
        flex-shrink: 0;
        margin-bottom: 
      }
    }
  }

  & .details-container {
    padding: 40px;
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: var(--font-size-medium);
      font-weight: 700;
      color: var(--text-color-headers);
      flex-shrink: 0;
    }

    &__content {
      max-width: 80%;
      color: var(--text-color-body);
    }
  }

  & .info-container {
    padding: 40px;
    display: flex;
    justify-content: space-between;

    &__title {
      font-size: var(--font-size-medium);
      font-weight: 700;
      color: var(--text-color-headers);
      flex-shrink: 0;
    } 

    &__content {
      max-width: 80%;
      color: var(--text-color-body);
      list-style-type: disc;
      margin-bottom: 100px;
      
      & :first-of-type {
        margin-bottom: 10px;
      }
    }
    
    .w-full {
      width: 100%;
    }
  }
`;

const PlantImage = Styled(GatsbyImage)`
  display: block;
  max-width: 100%;
`;


function Plant({ data, location }) {
  const { names, details, image, toxicity, care } = data.plantsJson;
  const imageSrc = getImage(image);
  const isToxic = toxicity === null ? false : true;
  
  return (
    <>
      <Helmet>
        {isToxic ? <title>☣️ TOXIC ☣️</title> : <title>{names.common} 🪴</title>}
        (
        {isToxic ? (
          <link rel="icon" href="https://fav.farm/😿" />
        ) : (
          <link rel="icon" href="https://fav.farm/😽" />
        )}
      </Helmet>
      <Layout currentPage={location}>
        <Main>
          <div className="container">
            <PlantImage image={imageSrc} alt={names.common} />
            <div className="card">
              <div className="card__title-container">
                <div className="card__title-container__title">
                  {names.common}
                </div>
                <div className="card__title-container__description">
                  {names.scientific}
                </div>
              </div>
              <div>
                <Tag isToxic={isToxic}>{isToxic ? 'Toxic' : 'Non-toxic'}</Tag>
              </div>
            </div>

            <hr className="line-break" />
            <div className="details-container">
              <div className="details-container__title">Details</div>
              <div className="details-container__content">{details}</div>
            </div>
            <hr className="line-break" />
            <div className="info-container">
              <div className="info-container__title">
                {isToxic ? 'Toxicity' : 'Care'}
              </div>
              <ul
                className={`${
                  isToxic
                    ? 'info-container__content'
                    : 'info-container__content w-full'
                }`}
              >
                <li>{isToxic ? toxicity.property : care.light}</li>
                <li>{isToxic ? toxicity.symptoms : care.water}</li>
              </ul>
            </div>
          </div>
        </Main>
      </Layout>
    </>
  );
}
export default Plant;


export const query = graphql`
  query ($slug: String!) {
    plantsJson(slug: { eq: $slug }) {
      names {
        common
        scientific
      }
      details
      image {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            layout: FULL_WIDTH
            width: 100
            height: 100
          )
        }
      }
      toxicity {
        property
        symptoms
      }
      care {
        light
        water
      }
    }
  }
`;