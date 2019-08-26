import React, { useState } from 'react'

const useInput = (initialValue, validator) => {
	const [value, setValue] = useState(initialValue);
	const onChange = (event) => {
		const {
			target: { value }
		} = event;
		console.log(event.target);
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
		}
		if(willUpdate) {
			setValue(value);
		}
	}
	return { value, onChange };
}

const useInputComponent = () => {
	const maxLength = (value) => value.length < 10;
	// const maxLength = (value) => value.length < 10;
	const name = useInput('Mr.', maxLength);

	return (
		<div>
			<input type="text"  placeholder="Name" {...name} />
		</div>
	)
}

export default useInputComponent
