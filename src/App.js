import React, { useState } from 'react';

const useInput = initialState => {
  const [ value, setValue ] = useState(initialState);
  const onChange = event => {
    console.log(event.target);
  }
  return { value, onChange }
}

const App = () => {

  const testCustomHook = useInput('Keen');
  return (

    <div>
      <input type="text" placeholder={testCustomHook.value} onChange={testCustomHook.onChange} />
    </div>
    
  )
}

export default App;