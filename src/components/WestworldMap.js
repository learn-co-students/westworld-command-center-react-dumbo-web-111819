import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'

const WestworldMap = (props) => {
  
  let mappedArea = props.areas.map(area => <Area key={area.id} obj={area} host = {props.host} />)
  return (
    <Segment id="map" >
      {mappedArea}
    </Segment>
  )
}

export default WestworldMap
