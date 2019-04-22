import React, { Component } from 'react';
import FaqList from '../components/FaqList';
import { Container } from 'reactstrap';

class Faq extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <h1 className="display-3 my-5">FAQ</h1>
        </Container>
        <FaqList />
      </div>
    );
  }
}

export default Faq;