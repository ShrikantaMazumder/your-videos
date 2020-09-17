import React from 'react';
import classes from './VideoItem.module.css';

const VideoItem = ({ video, onVideoSelect }) => {
    const { snippet: {title, thumbnails: { medium: { url } }} } = video;
    return (
        <div onClick={() => onVideoSelect(video)} className={[classes.videoItem, 'item' ].join(' ')}>
            <img className="ui image" src={url} alt={title}/>
            <div className="content">
                <div className="header"> {title} </div>
            </div>
        </div>
    );
};

export default VideoItem;