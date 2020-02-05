import React from 'react';
import '../stylesheets/Area.css'
import Areahost from './areahost'
const Area = (props) => {
let {name, limit} = props.obj
  let areaChecker = () => {
    if(props.host && props.host.area === name){
      return props.host
    }else {
      return {}
    }
  }
console.log(props)
  let correctArea = () => {
    if(props.host && props.host.area === name){
      return true
    }else {
      return false
    }
  }

return(
  <div className='area' id={name}>
    <h3 className='labels'>{name}</h3>
    <Areahost host = {areaChecker()} bool = {correctArea()}/>
    

  </div>
)
}

// Area.propTypes = {
//   hosts: function(props, propName, componentName){
//     if(props.hosts.length > props.limit){
//       throw Error(
//         `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
//       )
//     }
//   }
// }

export default Area;
