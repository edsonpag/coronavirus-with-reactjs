import React from 'react';

import Header from './Header';
import Panel from './Panel';
import Tips from './Tips';

import './Global.css'

import getCoronavirusInformation from './api/index';
import getSpecificState from './api/specificState';


class App extends React.Component {

  state = {
    data: {},
    state: '',
  }

  async componentDidMount() { 
    const fetchedData = await getCoronavirusInformation()

    this.setState({ data: fetchedData });
  }

  handleStateChange = async (state) => {
    const fetchedState = await getSpecificState(state)
  
    this.setState({ data:fetchedState, state: state })
  }

  render() {
    const { data } = this.state

    return (
      <>
        <Header handleStateChange = {this.handleStateChange}/>
        <Panel data={data}/>
        <Tips />
      </>
    );
  }
  
}

export default App;