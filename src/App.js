import React from 'react';
import './App.css';
import Props from './props';

class App extends React.Component {

  state = {
    bg: 'red'
  }

  check=(clr)=>{
    this.setState({bg : clr})
  }
 
  render() {
    return (
      <div className="App">
     
        <div style={{background:this.state.bg}}>
        state
        </div>

        <button onClick={() => this.check('green')}> Green </button>
          <button onClick={() => this.check('white')}> White </button>
          <button onClick={() => this.check('red')}> red </button>
          <button onClick={() => this.check('black')}> black </button>
        <div>

        <Props clr = {this.state.bg}/>
        </div>
      </div>
    );
  }
}
export default App;
