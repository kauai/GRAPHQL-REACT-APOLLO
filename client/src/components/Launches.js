import React, { Component } from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import LaunchItem from './LaunchItem'
import Load from '../source.gif'

const launches_query = gql`
  query LaunchesQuery {
       launches {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
       }
  }`

export default class Launches extends Component {
  render() {
    return (
      <div>
        <h5 className="my-3">Launches</h5>
        <Query query={launches_query}>
          {
              ({ loading, error, data }) => {
                 if(loading) return (
                 <div style={{textAlign:'center'}}>
                   <span>
                      <img class="img" alt="teste" src={Load}/>
                   </span>
                  </div> )
                 if(error) console.log(error)
                 return <LaunchItem { ...data }/>
              }
          }
        </Query>
      </div>
    )
  }
}
