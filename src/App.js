import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Route} from 'react-router-dom';

const Hats = () => {
  return(
    <div>
      hats
    </div>
  )
}




function App() {
  return (
    <div>
      
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={Hats} />
    </div>
  );
}

export default App;
