import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
