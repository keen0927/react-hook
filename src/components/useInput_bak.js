/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'

const customUseInput = (initialState, validate) => {
	const [ value, setValue ] = useState(initialState);
	const onChange = event => {
		const {
			target: {value}
		} = event;

		let willUpdate = true;

		if (typeof validate === "function") {
			willUpdate = validate(value);
		}

		if (willUpdate) {
			setValue(value);
		}
	}
	return { value, onChange }
}


function useInput() {

	const maxLen = (value) => value.length < 10;

	const name = customUseInput('Keen', maxLen);

	return (
		<div>
			<input type="text" placeholder="name" {...name} />
		</div>
	)
}

export default useInput;
