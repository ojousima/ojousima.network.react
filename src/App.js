/**
 * @file App mainpage
 * @author CRE template
 */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import WebBle from './WebBle';

/**
 * @brief Application entry point.
 *
 * @return {string} HTML of the app.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header" data-testid="app-header">
        <img src={logo} className="App-logo" alt="logo" />
        <WebBle data-testid="webble"/>
      </header>
    </div>
  );
}

export default App;
