import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import Westworld from './components/WestworldMap'
import Headquarters from './components/Headquarters'
class App extends Component {

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  state = {
    hosts:[],
    areas:[],
    selectedHost:{},
   

  }


  activator = (obj) => {
    console.log(obj)
    this.setState({
      selectedHost:obj
    })
  }
  componentDidMount() {
    fetch("http://localhost:3000/hosts")
    .then(r => r.json())
    .then(res => {
      this.setState({
        hosts:res
      })
    })

    fetch("http://localhost:3000/areas")
    .then(r => r.json())
    .then(res => {
      this.setState({
        areas:res
      })
    })
  }
  

  render(){
    console.log(this.state.selectedHost)
    return (
      <Segment id='app'>
        <Westworld areas={this.state.areas}  host = {this.state.selectedHost}/>
        <Headquarters hosts={this.state.hosts} active={this.activator}/>
      </Segment>
    )
  }
}

export default App;
