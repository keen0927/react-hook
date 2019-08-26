import React from 'react';
import { Route } from 'react-router-dom';
import useInputComponent from './useInputComponent';
import useEffect from './useEffect';
import useTitle from './useTitle';
// import useConfirm from './useConfirm';

const App = () => {

  return (
    <div>
      
      <Route path="/useInput" component={ useInputComponent } />
      {/*<Route path="/useEffect" component={ useEffect } />*/}
      {/*<Route path="/useTitle" component={ useTitle } />*/}
    </div>
  )
}

export default App