import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/main.css'
import { Header } from './components/Header';
import { MainContent } from './components/MainContent';
import { SeccionMeseros } from './components/SeccionMeseros';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainContent></MainContent>
      <SeccionMeseros></SeccionMeseros>
    </div>
  );
}

export default App;
