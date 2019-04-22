import React, { Component } from "react";
import { UncontrolledTooltip } from 'reactstrap';
import { MdDirectionsBike } from "react-icons/md";

class MapMarker extends Component { 
  render() {
    return (
      <div id={'Tooltip-' + this.props.id} className="bikeMapPoint">
        <MdDirectionsBike />
        <UncontrolledTooltip placement="top" target={'Tooltip-' + this.props.id}>
          {this.props.name}<br />
          rides - {this.props.type}
        </UncontrolledTooltip>
      </div>
    )
  } 
}

export default MapMarker