import React, { useState } from 'react';

const App = () => {

  const [ toggleValue, setToggleValue ] = useState(false);
  const onToggle = () => setToggleValue(!toggleValue);

  const toggleExecute = () => {
    setToggleValue(!toggleValue);
    return toggleValue ? "참": "거짓" ;
  }

  return (
    <div>
      <div>{ toggleValue ? 'on' : 'off'}</div>
      <button onClick={toggleExecute}>버튼</button>
    </div>
  )
}

export default App;