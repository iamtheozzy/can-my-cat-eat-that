exports.createPages = async ({actions: {createPage}, graphql}) => {
  const results = await graphql(`
    {
      allPlantsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if(results.error) {
    console.log(results.error);
    return;
  }
  results.data.allPlantsJson.edges.forEach(({node}) => {
    createPage({
      path: `/plants/${node.slug}/`,
      component: require.resolve(`./src/templates/plant.js`),
      context: {
        slug: node.slug,
      },
    });
  })
}


 