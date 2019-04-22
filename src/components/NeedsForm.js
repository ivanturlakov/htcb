import React, { Component } from 'react';
import { CardBody, Card, CardTitle, Col, Row, Button, ButtonGroup, UncontrolledTooltip, Form } from 'reactstrap';
import NeedsResult from './NeedsResult';


export default class NeedsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradient: null,
      obstacles: null,
      style: null,
      level: null, 
    };

  }

  onClick = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col>
              <Form>
                <Row>
                <Col className="col-md-3">
                  <Card className="needsCard">
                    <CardBody>
                      <CardTitle><h5>Gradient <span className="badge badge-secondary" id="ChooseGradient">?</span></h5></CardTitle>
                      <UncontrolledTooltip placement="top" target="ChooseGradient">
                        Define terrain gradient you will ride
                      </UncontrolledTooltip>
                      <ButtonGroup 
                        size="md"
                        id='gradient'
                      >
                        <Button color='primary' name='gradient' value='plain' onClick={this.onClick} active={this.state.gradient === 'plain'}>Plain</Button>
                        <Button color='primary' name='gradient' value='hilly' onClick={this.onClick} active={this.state.gradient === 'hilly'}>Hilly</Button>
                        <Button color='primary' name='gradient' value='steep' onClick={this.onClick} active={this.state.gradient === 'steep'}>Steep</Button>
                      </ButtonGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="col-md-3">
                  <Card className="needsCard">
                    <CardBody>
                      <CardTitle><h5>Obstacles <span className="badge badge-secondary" id="ChooseObstacles">?</span></h5></CardTitle>
                      <UncontrolledTooltip placement="top" target="ChooseObstacles">
                        Define obstacles level you will ride
                      </UncontrolledTooltip>
                      <ButtonGroup size="md"
                        id='obstacles'
                      >
                        <Button color='primary' name='obstacles' value='easy' onClick={this.onClick} active={this.state.obstacles === 'easy'}>Easy</Button>
                        <Button color='primary' name='obstacles' value='medium' onClick={this.onClick} active={this.state.obstacles === 'medium'}>Medium</Button>
                        <Button color='primary' name='obstacles' value='hard' onClick={this.onClick} active={this.state.obstacles === 'hard'}>Hard</Button>
                      </ButtonGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="col-md-3">
                  <Card className="needsCard">
                    <CardBody>
                      <CardTitle><h5>Style <span className="badge badge-secondary" id="ChooseStyle">?</span></h5></CardTitle>
                      <UncontrolledTooltip placement="top" target="ChooseStyle">
                        Choose your primary riding style
                      </UncontrolledTooltip>
                      <ButtonGroup size="md"
                        id='style'
                      >
                        <Button color='primary' name='style' value='calm' onClick={this.onClick} active={this.state.style === 'calm'}>Calm</Button>
                        <Button color='primary' name='style' value='active' onClick={this.onClick} active={this.state.style === 'active'}>Active</Button>
                        <Button color='primary' name='style' value='extreme' onClick={this.onClick} active={this.state.style === 'extreme'}>Extreme</Button>
                      </ButtonGroup>
                    </CardBody>
                  </Card>
                </Col>
                <Col className="col-md-3">
                  <Card className="needsCard">
                    <CardBody>
                      <CardTitle><h5>Level <span className="badge badge-secondary" id="ChooseBuild">?</span></h5></CardTitle>
                      <UncontrolledTooltip placement="top" target="ChooseBuild">
                        Pro level has more expensive components.
                      </UncontrolledTooltip>
                      <ButtonGroup size="md"
                        id='level'
                      >
                        <Button color='primary' name='level' value='entry' onClick={this.onClick} active={this.state.level === 'entry'}>Entry</Button>
                        <Button color='primary' name='level' value='medium' onClick={this.onClick}  active={this.state.level === 'medium'}>Medium</Button>
                        <Button color='primary' name='level' value='pro' onClick={this.onClick} active={this.state.level === 'pro'}>Pro</Button>
                      </ButtonGroup>
                    </CardBody>
                  </Card>
                </Col>
                </Row>
              </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            <NeedsResult {...this.state}/>
          </Col>
        </Row>
      </div>
    );
  }
}