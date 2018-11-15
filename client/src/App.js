import React, { Component } from 'react';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import './App.css';
import logo from './space-x-logo.jpg';
import Launches from './components/Launches';


const client = new ApolloClient({
   uri:'http://localhost:3001/graphql'
})


class App extends Component {

  render() {

    return (
      <ApolloProvider client={ client }>
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
          <Launches/>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
