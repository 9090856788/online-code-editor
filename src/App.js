import React from 'react';
import Home from './components/Home';
import DataProvider from './context/DataProvider';
import './App.css';

const App = () => {
  return (
      <DataProvider>
          <Home/>
      </DataProvider>
  )
};

export default App;
