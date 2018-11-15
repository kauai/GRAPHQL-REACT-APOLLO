{
    launches {
       flight_number,
       mission_name,
       launch_year,
       launch_success,
      launch_date_local,
      rocket {
        rocket_id,
        rocket_name,
        rocket_type
      }
      
    }
  }

  /////////////////////
  {
    launch(flight_number:10){
       flight_number,
       mission_name,
       launch_date_local,
      launch_success
    }
  }

  -----------------------------
//depois do backup essa é segunda versao depois do refatoramento deu erro
const axios = require('axios')

const { 
    GraphQLObjectType,
    GraphQLInt, 
    GraphQLString, 
    GraphQLBoolean,
    GraphQLList,
    GraphQLSchema
} = require('graphql')

//LAUNCH TYPE
const LaunchType = new GraphQLObjectType({
    name:'Launch',
    fields:() => ({
        flight_number:{ type:GraphQLInt },
        mission_name:{ type: GraphQLString },
        launch_year:{ type: GraphQLString },
        launch_date_local:{ type: GraphQLString },
        launch_success:{ type: GraphQLBoolean },
        rocket:{ type: RocketType }
    })
})

//ROCKET TYPE
const RocketType = new GraphQLObjectType({
    name:'Rocket',
    fields:() => ({
        rocket_id:{ type:GraphQLString },
        rocket_name:{ type: GraphQLString },
        rocket_type:{ type: GraphQLString }
    })
})

//Root query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        rockets:{
           type:new GraphQLList(RocketType),
           resolve(parent,args) {
               return axios.get('https://api.spacexdata.com/v3/rockets')
               .then(res => res.data)
           }
        },
        rocket:{
            type:RocketType,
            args:{
                id:{ type: GraphQLInt }
            },
            resolve(parent,args) {
                return axios.get(`https://api.spacexdata.com/v3/rockets/${ args.id }`)
                .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery
})




