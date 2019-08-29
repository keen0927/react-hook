import React from 'react';
import { Route } from 'react-router-dom';
import useFadeIn from './useFadeIn';
// import useConfirm from './useConfirm';

const App = () => {

  return (
    <div>
      
      <Route path="/" component={ useFadeIn } />
      {/*<Route path="/useInput" component={ useInputComponent } />*/}
      {/*<Route path="/useEffect" component={ useEffect } />*/}
      {/*<Route path="/useTitle" component={ useTitle } />*/}
    </div>
  )
}

export default App