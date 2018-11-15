const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3001

//Allow cross-origin
app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(port,() => {
    console.log('server started on port ' + port)
})