import React, { Component, Fragment } from 'react'
import gql from 'graphql-tag'
import Load from '../source.gif'
import classNames from 'classnames'
import { Query } from 'react-apollo'
import { Link } from 'react-router-dom'

const launch_query = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number,
            mission_name,
            launch_year,
            launch_success,
            launch_date_local,
            rocket{
                rocket_id,
                rocket_name,
                rocket_type
            }
        }
    }
`

export default class Launch extends Component {
  render() {
       let { flight_number } = this.props.match.params

    flight_number = parseInt(flight_number)

    return (
      <Fragment>
        <Query query={ launch_query } variables={{ flight_number }}>
           {
               ({ loading, error, data }) => {
                  if(loading) return <h1 style={{textAlign:"center"}}>
                                         <img style={{"borderRadius":"50%"}} src={Load} alt="loading"/>
                                     </h1>
                  if(error) console.log(error)
                  console.log(data)
                  const { 
                        mission_name,
                        launch_year,
                        launch_success,
                        launch_date_local,
                    rocket:{
                         rocket_id,
                         rocket_name,
                         rocket_type
                    }} = data.launch
                  return <Fragment>
                    {(data && <div>
                        <h1 className="display-4 my-3">
                            <span className="tex-dark">Mission: </span>
                            { mission_name }
                        </h1>
                        <h4 className="mb-3">Launch Details</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Flight number: { flight_number }</li>
                            <li className="list-group-item">Launch year: { launch_year }</li>
                            <li className="list-group-item">
                            Launch Success: <span className={classNames({
                                'text-success':launch_success,
                                'text-danger':!launch_success
                            })}>{launch_success ? 'Yes': 'No' }</span></li>
                            <li className="list-group-item">Flight number: { flight_number }</li>
                        </ul>
                        <h4 className="mb-3">Rocket Details</h4>
                        <ul className="list-group">
                            <li className="list-group-item">Rocket id: { rocket_id }</li>
                            <li className="list-group-item">Rocket name: { rocket_name }</li>
                            <li className="list-group-item">Rocket type: { rocket_type }</li>
                        </ul>
                        <br/>
                        <Link to="/" className="btn btn-secondary">Back</Link>
                    </div>)
                    || (<h4>Nao ouve resultados...</h4>)}
                  </Fragment>
               }
           }
        </Query>
      </Fragment>
    )
  }
}
