import React, { useState, useEffect} from 'react';

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);

	const onChange = (event) => {
		const {
			target: { value }
		} = event;
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
		}
		if(willUpdate) {
			setValue(value);
		}
	}
	return {value, onChange}
}

const useInputTest = () => {

	const name = useInput('Mr.');

	return (
		<div>
			<input type="text" {...name} />
		</div>
	)
}

export default useInputTest;