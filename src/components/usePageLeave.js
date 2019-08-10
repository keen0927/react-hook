import React, { useState, useEffect } from 'react'

function useInput() {

	const sayHello = () => console.log('Hello');

	const [ number, setNumber ] = useState(0);
	const [ aNumber, setAnumber ] = useState(0);

	useEffect(() => {
		sayHello();
	},[number]);

	return (
		<div>
{number}<br/>
{aNumber}
			<button onClick={() => setNumber(number + 1)}>Inc</button>
			<button onClick={() => setAnumber(aNumber + 1)}>Dec</button>
		</div>
	)
}

export default useInput;
