import React from 'react';

import Header from './Header';
import Panel from './Panel';
import Tips from './Tips';

import './Global.css'

import getCoronavirusInformation from './api/index';


class App extends React.Component {

  state = {
    data: {},
  }

  async componentDidMount() { 
    const fetchedData = await getCoronavirusInformation()

    this.setState({ data: fetchedData })
  }

  render() {
    const { data } = this.state

    return (
      <>
        <Header />
        <Panel data={data}/>
        <Tips />
      </>
    );
  }
  
}

export default App;