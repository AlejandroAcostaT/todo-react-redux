import React from 'react';
import './App.css';
import Tasks from './features/tasks/Tasks';

function App() {
  return (
    <div className='container'>
      <h1 className='title'>Todo APP</h1>
      <Tasks/>
    </div>
  );
}

export default App;
