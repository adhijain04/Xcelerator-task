import React, { Component } from 'react';
import CardList from './CardList';
// import CardDetails from './CardDetails';

class Container extends Component {
  render() {
    return (
      <div className='card-app-container'>
      	<CardList />
      </div>
    );
  }
}


export default Container;