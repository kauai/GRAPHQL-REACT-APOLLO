import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css'
import logo from './space-x-logo.jpg'
import Launches from './components/Launches'
import Launch from './components/Launch'


const client = new ApolloClient({
   uri:'/graphql'
})


class App extends Component {

  render() {

    return (
      <ApolloProvider client={ client }>
      <Router>
        <div className="container">
          <div className="teste" style={{ height:64, overflow:'hidden' }}>
            <img style={{
              width:300,
              display:'block',
              margin:'auto',
              bottom:88,
              position:'relative'}}
              src={logo} 
              alt='imagem de teste'/>
          </div>
            <Route path="/" exact component={Launches}/>
            <Route path="/launch/:flight_number" exact component={Launch}/>
        </div>
      </Router>
      </ApolloProvider>
    );
  }
}

export default App;
