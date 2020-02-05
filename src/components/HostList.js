import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'
const HostList = (props) => {
  
  let mappedHosts = props.hosts.map(host => <Host key ={host.id} obj = {host} infoHandler = {props.handleInfo}/>)
  return(
    <Card.Group itemsPerRow={6}>
     {mappedHosts}
    </Card.Group>
  )
}

export default HostList
