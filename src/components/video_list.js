import React from 'react';
import VideoListItem from './videos_list_item';

const VideoList  = (props) =>{
    const videoItems = props.videos.map((video)=>{
        return <VideoListItem 
            onSelectedVideo = {props.onSelectedVideo}
            video={video} 
            key={video.etag}/>
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};


export default VideoList;