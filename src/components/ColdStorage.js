import React from 'react';
import { Segment } from 'semantic-ui-react'
import Hostlist from './HostList'
import HostList from './HostList';
const ColdStorage = (props) => {
  
return(
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

      <HostList hosts = {props.hosts} handleInfo={props.infoHandler}/>

    </Segment>
  </Segment.Group>
  )
}

export default ColdStorage
