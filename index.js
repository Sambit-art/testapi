const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { loadFilesSync } = require('@graphql-tools/load-files')
const path = require('path')
const schema = makeExecutableSchema({
    typeDefs: loadFilesSync(path.join(__dirname, 'schemas/*.graphql')),
    resolvers: loadFilesSync(path.join(__dirname,'schemas/*.resolver.js'))
})

const app = express()
app.use('/graphql', graphqlHTTP({
    schema: schema,
    // rootValue: require('./models/data'),
    graphiql: true
}))
app.listen(3000, () => {
    console.log('graphql server listen on port 3000');
})