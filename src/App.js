import './App.css';
import React, { Component } from 'react';
//Components
import Navigation from './components/Navigation';
import Personform from './components/Personform';

export default class App extends Component {
  render() {
    return (
        <div className='App'>
          <Navigation/>
          <div className='divbody'>
            <Personform/>
          </div>
        </div>
      
    )
  }
}

