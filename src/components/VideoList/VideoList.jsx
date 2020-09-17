import React from 'react';
// import classes from './VideoList.module.css';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => <VideoItem onVideoSelect={onVideoSelect} video={video} />)
    return (
        <div className="ui relaxed divided list">
            {
                renderedList
            }
        </div>
    );
};

export default VideoList;