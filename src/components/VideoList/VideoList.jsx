import React from 'react';
import classes from './VideoList.module.css';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => <VideoItem />)
    return (
        <div>
            {
                renderedList
            }
        </div>
    );
};

export default VideoList;