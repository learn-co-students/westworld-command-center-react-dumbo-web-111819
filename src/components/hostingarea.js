import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const hostingarea = (props) => {
  let {firstName, lastName,active,imageUrl,gender,area} = props.obj
    console.log(props)
  let handleclick =  (evt) => {
    
    props.infoHandler(props.obj)
  }

  return(
    <Card
      className="host selected"
      
   onClick={handleclick}
   image={imageUrl}
      raised
    />
  )
}

export default hostingarea
//  className="host selected" change it later