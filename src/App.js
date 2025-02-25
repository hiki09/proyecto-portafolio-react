import React from 'react';
import Header from './components/Header';
import ProjectList from './components/ProjectList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/*Aquí puedes agregar más componentes como ProjectList, Footer, etc. */}
      <ProjectList />
    </div>
  );
}

export default App;
