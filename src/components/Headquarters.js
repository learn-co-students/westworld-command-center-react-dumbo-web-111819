import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'

class Headquarters extends Component {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.
    state = {
      host: {}
    }
    handleInfoDisplay = (obj) => {
     this.setState({
       host:obj
     })
    }

  render(){
    
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.props.hosts} infoHandler = {this.handleInfoDisplay}/>

        </Grid.Column>
        <Grid.Column width={5}>
          <Details obj={this.state.host} active={this.props.active}/>
        </Grid.Column>
        <Grid.Column width={3}>

        

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
