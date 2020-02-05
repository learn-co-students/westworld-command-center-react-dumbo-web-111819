import React from 'react'
import { Card } from 'semantic-ui-react'
import Hostingarea from './hostingarea'
const areahost = (props) => {
  let toDisplay = () => {
    if (props.bool === true){
        return (
            <Hostingarea obj = {props.host}/>
        )
    }else{
        return null
    }
  }
//   let mappedHosts = props.hosts.map(host => <Hosting key ={host.id} obj = {host} infoHandler = {props.handleInfo}/>)
  return(
    <Card.Group itemsPerRow={6}>
     {toDisplay()}
    </Card.Group>
  )
}

export default areahost