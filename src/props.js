import React from 'react';
import './App.css';
import { checkServerIdentity } from 'tls';

class Props extends React.Component {
  render() {
    return (
      <div className="App" style={{backgroundColor:this.props.clr}}>
        <div>
            <h1>Props</h1>
        </div>
      </div>
    );
  }
}
export default Props;

