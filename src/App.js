import React, { Component } from 'react';

import './App.css';
import styled from 'styled-components';


class App extends Component {
  render() {
    return (
      <div className="App">
        <H1>中华</H1>
        <H2 size={true}>人民</H2>
       
      </div>
    );
  }
}


export default App;

const H1 = styled.h1`
  color:red;
  background-color:yellow;
  width:100%;
  height:calc(30vh);
  text-align:center;
border:1px solid #000;
`
const H2 = styled(H1)`
  color:green;
  font-size:${props => props.size ? '130px' : '15px'}
`
