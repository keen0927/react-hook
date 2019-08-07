import React, { useState, useEffect } from 'react'

const useTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);

	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title
	}

	useEffect(() => {
		updateTitle();
	},[title]);
	return setTitle;
}

const useTitleCustom = () => {

	const titleUpdate = useTitle('Loading...');

	// setTimeout(() => {
	// 	titleUpdate("k")
	// },2000);

	return (
		<div>
			<button onClick={() => titleUpdate("k")}>클릭</button>
		</div>
	)
}

export default useTitleCustom;
