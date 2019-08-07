import React from 'react';
import { Route } from 'react-router-dom';
import useInput from './useInput';
import useEffect from './useEffect';
import useTitle from './useTitle';

const App = () => {
  return (
    <div>
      <Route path="/useInput" component={ useInput } />
      <Route path="/useEffect" component={ useEffect } />
      <Route path="/useTitle" component={ useTitle } />
    </div>
  )
}

export default App