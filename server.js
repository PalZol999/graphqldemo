/*const express  = require('express');
const { createYoga } = require('graphql-yoga');
const { createSchema } = require('graphql-yoga');
 
const schema = createSchema({
    typeDefs: 
      type Query {
        description: String
        price: Float
      }
    `,
    resolvers: {
      Query: {
        description: () => 'Red Shoe',
        price: () => 42.12,
 
      }
    }
  })
 
const app = express()
 
const yoga = createYoga({
    schema,
    context: (req) => ({ // Context factory gets called for every request
        //myToken: req.headers.get('authorization') // I've commented this line because it was causing problems and it seems to work :)
    }),
    graphiql: true,
})
 
// A continuacion el endpoint de graphql
app.use('/graphql', yoga)
 
app.listen(3030, () => {
    console.log('Running GraphQL server...')
})*/




const path = require("path");
const express = require("express");
const { createYoga } = require("graphql-yoga");

const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

/*const typesArray = loadFilesSync('**//*', {
    extensions: ['graphql'],
});
const resolversArray = loadFilesSync("**//*", {
    extensions: ["resolvers"],
  });*/

  const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
  const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers:resolversArray
});

const app = express();

const yoga = createYoga({
  schema: schema,
  graphiql: true,
});

app.use("/graphql", yoga);

app.listen(3030, () => {
  console.log("Running GraphQL server...");
});
