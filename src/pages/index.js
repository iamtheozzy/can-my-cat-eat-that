import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { Hero } from "../components/hero";
import { Main } from "../components/main";
import { Toolbar } from "../components/toolbar";
import { Dropdown } from "../components/dropdown";
import { ButtonGroup, Button } from "../components/buttons";
import { Grid } from "../components/grid";
import { List } from "../components/list";
import { SearchInput } from "../components/search-input";
import gridIcon from '../icons/grid-icon.svg';
import lisIcon from '../icons/list-icon.svg';
import leftCat from '../illustrations/cat-left.svg';
import rightCat from '../illustrations/cat-right.svg';
import { Helmet } from 'react-helmet';

const IndexPage = ({data, location}) => {
  const [templateView, setTemplateView] = React.useState("grid")
  const [ toxicitySelection , setToxicitySelection] = React.useState("All");
  const allPlants = data.allPlantsJson.edges
  const nonToxicPlants = allPlants.filter(({node}) => (node.toxicity === null))
  const toxicPlants = allPlants.filter(({node}) => (node.toxicity !== null))
  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery
  });

  const dropdownItems = ['All', 'Toxic', 'Non-toxic'];

  function handleWhichDataSetToSearch() {
    if( toxicitySelection === "Toxic") {
      return toxicPlants
    } else if (toxicitySelection === "Non-toxic") {
      return nonToxicPlants
    } else {
      return allPlants
    }
  }

  function handleInputChange(event) {
    const query = event.target.value;
    const plantData = handleWhichDataSetToSearch() || []

    const filteredPlantData = plantData.filter((edge) => {
      const { names: {common, scientific} } = edge.node;
      return (
        common.toLowerCase().includes(query.toLowerCase()) ||
        scientific.toLowerCase().includes(query.toLowerCase())
      );
    });

    setState({
      query,
      filteredData: filteredPlantData
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const searchResults = hasSearchResults
    ? filteredData
    : handleWhichDataSetToSearch();

  return (
    <>
      <Helmet>
        <title>Can my cat eat that?</title>
        <link rel="icon" href="https://fav.farm/🐱" />
      </Helmet>
      <Layout currentPage={location}>
        <Hero>
          <img
            className="hero__img hero__img--left"
            src={leftCat}
            alt="Illustration of cute orange cat and a plant"
          />
          <img
            className="hero__img hero__img--right"
            src={rightCat}
            alt="Illustration of cute gray cat and a plant"
          />
          <div className="hero__content">
            <p className="hero__content-title">Can my cat eat that?</p>
            <p className="hero__content-description">
              Search and filter common house plants and see what’s safe for
              Sprinkles to nibble on.
            </p>
            <SearchInput
              type="text"
              onChange={handleInputChange}
              placeholder=" Spider plant, fiddle leaf fig, etc..."
            />
          </div>
        </Hero>
        <Main>
          <Toolbar>
            <Dropdown
              items={dropdownItems}
              setToxicitySelection={setToxicitySelection}
            />
            <ButtonGroup role="group" aria-labelledby="template-select">
              <label id="template-select" className="button-group__label">
                View options
              </label>
              <div className="button-group__container">
                <Button
                  type="button"
                  padding="4px 4px 2px 4px"
                  margin="0 4px 0 0"
                  opacity={templateView === 'grid' ? 1 : 0.5}
                  onClick={() => setTemplateView('grid')}
                  aria-pressed={templateView === 'grid' ? 'true' : 'false'}
                >
                  <img src={gridIcon} alt="grid" />
                </Button>
                <Button
                  type="button"
                  padding="4px 4px 4px 4px"
                  opacity={templateView === 'list' ? 1 : 0.5}
                  onClick={() => setTemplateView('list')}
                  aria-pressed={templateView === 'list' ? 'true' : 'false'}
                >
                  <img src={lisIcon} alt="list" />
                </Button>
              </div>
            </ButtonGroup>
          </Toolbar>
          {templateView === 'grid' && <Grid data={searchResults} />}
          {templateView === 'list' && <List data={searchResults} />}
        </Main>
      </Layout>
    </>
  );
}

export const query = graphql`
  {
    allPlantsJson {
      edges {
        node {
          care {
            light
            water
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
          names {
            common
            scientific
          }
          slug
          toxicity {
            property
            symptoms
          }
        }
      }
    }
  }
`;


export default IndexPage
