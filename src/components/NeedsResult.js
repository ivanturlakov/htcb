import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Spinner, Col, Row, Badge, Button } from 'reactstrap';
import city from './../img/city-s.jpeg';
import road from './../img/road-s.jpeg';
import mtb from './../img/mtb-s.jpeg';
import trail from './../img/trail-s.jpeg';
import downhill from './../img/downhill-s.jpeg';
import BikeModal from './BikeModal';
import ReactToPrint from 'react-to-print';

export default class NeedsResult extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'Ghost Rider',
      type: null,
      frame: null,
      transmission: null,
      brakes: null,
      suspension: null,
      build: null
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.gradient || !props.obstacles || !props.style) {
      state.type = null; 
    } else if (props.gradient !== 'steep' && props.obstacles === 'easy' && props.style === 'calm') {
      state.type = 'city';
    } else if (props.gradient !== 'steep' && props.obstacles === 'easy' && props.style === 'active') {
      state.type = 'road';
    } else if (props.gradient !== 'steep' && props.obstacles !== 'hard' && props.style === 'calm') {
      state.type = 'cross';
    } else if (props.gradient !== 'steep' && props.obstacles !== 'easy' && props.style !== 'calm') {
      state.type = 'trail';
    } else if (props.gradient === 'steep' && props.obstacles !== 'easy' && props.style !== 'calm') {
      state.type = 'downhill';
    } else {
      state.type = 'trail';
    }
  
    if (!props.obstacles || !props.style) {
      state.frame = null;
    } else if (props.obstacles === 'easy' && props.style !== 'extreme') {
      state.frame = 'hardtail';
    } else {
      state.frame = 'fullsuspension';
    }
  
    if (!props.gradient) {
      state.transmission = null;
    } else if (props.gradient === 'plain') {
      state.transmission = 'single';
    } else {
      state.transmission = 'multi';
    }
  
    if (!props.gradient || !props.style) {
      state.brakes =  null;
    } else if (props.gradient === 'plain' && props.style === 'calm') {
      state.brakes = 'vbrake';
    } else {
      state.brakes = 'disk';
    }
    
    if (!props.style || !props.obstacles) {
      state.suspension = null;
    } else if (props.style === 'calm' && props.obstacles !== 'hard') {
      state.suspension = 'short';
    } else if (props.style !== 'calm' && props.obstacles !== 'hard') {
      state.suspension = 'long';
    } else if (props.style !== 'calm' && props.obstacles !== 'easy') {
      state.suspension = 'xlong';
    } else {
      state.suspension = 'medium';
    }
  
    if (!props.level) {
      state.build = null;
    } else if (props.level === 'entry') {
      state.build = 'entry';
    } else if (props.level === 'medium') {
      state.build = 'medium';
    } else if (props.level === 'pro') {
      state.build = 'pro';
    }

    return state;
  } 

  render() {
    return (
      <div ref={el => (this.componentRef = el)}>
        <Row>
          <Col className="col-12 col-sm-9">
            <Card className="needsCard">
              <CardBody>
                <div className="img-placeholder">
                  <img src={trail} alt={"Trail Bike"} width="100%"/>
                </div>
                <div className="result-use PrintHide">
                  <Card className="needsCard">
                    <CardBody>
                      <CardTitle><h6>Use Result:</h6></CardTitle>
                      <BikeModal {...this.state}/>
                      <ReactToPrint
                        trigger={() => (
                          <Button 
                            className="btn-sm"
                            color="success"
                            disabled={
                              (this.props.gradient === null) || 
                              (this.props.obstacles === null) || 
                              (this.props.style === null) || 
                              (this.props.level === null)
                            }
                          >
                            Print Build!
                          </Button>
                        )}
                        content={() => this.componentRef}
                        bodyClass="PrintClass"
                      />
                    </CardBody>
                  </Card>
                </div>
                {this.state.type === null ? (
                  <div className="bike-results">
                    <div className="d-flex align-items-center">
                      <Spinner type="grow" color="success" />
                      <span>&nbsp;Please select gradient/obstacles/style</span>
                    </div>
                  </div>
                ) : null}
                {this.state.type === 'city' ? (
                  <div className="bike-results">
                    <h5>Recomended <Badge color="success">City Bike</Badge></h5>
                    <img src={city} alt={"City Bike"} width="100%" />
                  </div>
                ) : null}
                {this.state.type === 'road' ? (
                  <div className="bike-results">
                    <h5>Recomended <Badge color="success">Road Bike</Badge></h5>
                    <img src={road} alt={"Road Bike"} width="100%"/>
                  </div>
                ) : null}
                {this.state.type === 'cross' ? (
                  <div className="bike-results">
                    <h5>Recomended <Badge color="success">Cross-Country Bike</Badge></h5>
                    <img src={mtb} alt={"Cross-Country Bike"} width="100%"/>
                  </div>
                ) : null}
                {this.state.type === 'trail' ? (
                  <div className="bike-results">
                    <h5>Recomended <Badge color="success">Trail Bike</Badge></h5>
                    <img src={trail} alt={"Trail Bike"} width="100%"/>
                  </div>
                ) : null}
                {this.state.type === 'downhill' ? (
                  <div className="bike-results">
                    <h5>Recomended <Badge color="success">Downhill Bike</Badge></h5>
                    <img src={downhill} alt={"Downhill Bike"} width="100%"/>
                  </div>
                ) : null}
              </CardBody>
            </Card>
          </Col>
          <Col className="col-12 col-sm-3">
            <Row>
              <Col className="col-md-12">
                <Card className="needsCard">
                  <CardBody>
                    <CardTitle><h6>Frame</h6></CardTitle>
                    {this.state.frame === null ? (
                      <div className="d-flex align-items-center">
                        <Spinner type="grow" color="success" />
                        <span>&nbsp;Select obstacles/style</span>
                      </div>
                    ) : null}
                    {this.state.frame === 'hardtail' ? (
                      <h5><Badge color="dark">Hardtail</Badge></h5>
                    ) : null}
                    {this.state.frame === 'fullsuspension' ? (
                      <h5><Badge color="dark">Full-Suspension</Badge></h5>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-md-12">
                <Card className="needsCard">
                  <CardBody>
                    <CardTitle><h6>Transmission</h6></CardTitle>
                    {this.state.transmission === null ? (
                      <div className="d-flex align-items-center">
                        <Spinner type="grow" color="success" />
                        <span>&nbsp;Select gradient</span>
                      </div>
                    ) : null}
                    {this.state.transmission === 'single' ? (
                      <h5><Badge color="dark">Singlespeed</Badge></h5>
                    ) : null}
                    {this.state.transmission === 'multi' ? (
                      <h5><Badge color="dark">Multispeed</Badge></h5>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-md-12">
                <Card className="needsCard">
                  <CardBody>
                    <CardTitle><h6>Brakes</h6></CardTitle>
                    {this.state.brakes === null ? (
                      <div className="d-flex align-items-center">
                        <Spinner type="grow" color="success" />
                        <span>&nbsp;Select gradient/style</span>
                      </div>
                    ) : null}
                    {this.state.brakes === 'vbrake' ? (
                      <h5><Badge color="dark">V-brake</Badge></h5>
                    ) : null}
                    {this.state.brakes === 'disk' ? (
                      <h5><Badge color="dark">Disk</Badge></h5>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-md-12">
                <Card className="needsCard">
                  <CardBody>
                    <CardTitle><h6>Suspension</h6></CardTitle>
                    {this.state.suspension === null ? (
                      <div className="d-flex align-items-center">
                        <Spinner type="grow" color="success" />
                        <span>&nbsp;Select obstacles/style</span>
                      </div>
                    ) : null}
                    {this.state.suspension === 'short' ? (
                      <h5><Badge color="dark">80 - 120mm of Travel</Badge></h5>
                    ) : null}
                    {this.state.suspension === 'long' ? (
                      <h5><Badge color="dark">120 - 160mm of Travel</Badge></h5>
                    ) : null}
                    {this.state.suspension === 'xlong' ? (
                      <h5><Badge color="dark">160 - 200mm of Travel</Badge></h5>
                    ) : null}
                    {this.state.suspension === 'medium' ? (
                      <h5><Badge color="dark">120 - 160mm of Travel</Badge></h5>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-md-12">
                <Card className="needsCard">
                  <CardBody>
                    <CardTitle><h6>Build</h6></CardTitle>
                    {this.state.build === null ? (
                      <div className="d-flex align-items-center">
                        <Spinner type="grow" color="success" />
                        <span>&nbsp;Select level</span>
                      </div>
                    ) : null}
                    {this.state.build === 'entry' ? (
                      <h5><Badge color="dark">Origin / Comp / Essential ...</Badge></h5>
                    ) : null}
                    {this.state.build === 'medium' ? (
                      <h5><Badge color="dark">Advanced / Sport ...</Badge></h5>
                    ) : null}
                    {this.state.build === 'pro' ? (
                      <h5><Badge color="dark">Pro / Race / Elite ...</Badge></h5>
                    ) : null}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}