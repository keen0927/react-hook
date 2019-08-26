import React, { useState, useEffect } from 'react'

const useTitleUpdater = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);

	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerText = title;
	}

	const test = () => {
		console.log('ttt');
	}

	useEffect(updateTitle,[]);
	useEffect(test,[]);
	return setTitle;
}

const useTitle = () => {

	const handleChange = () => {
		console.log('11');
	}
	const ddd = useTitleUpdater('바뀜');

	// setTimeout(function(){
	// 	console.log('바뀜');
		
	// },3000);

	// const updater = useTitleUpdater('..loading');

	// const titleChange = useTitleUpdater('..loading');

	// setTimeout(() => {
	// 	console.log('setTime');
	// 	useTitleUpdater('11');
	// },2000)

	// const titleChange = useTitleUpdater('111');

	return (
		<div>
			<button type="button">버튼</button>
		</div>
	)
}

export default useTitle
