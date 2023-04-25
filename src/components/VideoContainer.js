import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constant';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
}, [])

const getVideos = async () => {
	const data = await fetch(YOUTUBE_VIDEOS_API);
	const json = await data.json();
	console.log("data",json.items)
	setVideos(json.items);
};

if(!videos.length){
	return <div>Loading...</div>
}

	return (
		<div>
			{videos.map(video => (
			<Link to={"/watch?v="+ video.id}>	<VideoCard key={video.id} info={videos}/></Link>
			))}
		</div>
	);
};

export default VideoContainer;