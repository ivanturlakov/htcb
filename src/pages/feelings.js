import React, { Component } from 'react';
import FeelingsList from '../components/FeelingsList';
import { Container } from 'reactstrap';

class Feelings extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="display-3 my-5">Choose Riding Style That You Like</h1>
        </Container>
        <FeelingsList />
      </div>
    );
  }
}

export default Feelings;