import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();

useEffect(() =>{
	dispatch(closeMenu());
}, [])

	return (
		<div>WatchPage</div>
	)
}

export default WatchPage