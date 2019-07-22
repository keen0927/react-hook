import React from 'react';
import { Route } from 'react-router-dom';
import useInput from './useInput';




const App = () => {
  return (
    <div>
      <Route path="/useinput" component={ useInput } />
    </div>
  )
}

export default App