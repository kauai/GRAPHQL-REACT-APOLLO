const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

//Allow cross-origin
app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

app.use(express.static('public'))

app.get('*',(req,res) => {
    res.sendFile(__dirname,'public')
})

app.listen(port,() => {
    console.log('server started on port ' + port)
})