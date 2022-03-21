import React from "react";
import VideoPlayer from "react-native-video-controls";

const Video = ({onClose}) => {
    return(
        <VideoPlayer
        onBack={() => {onClose()}}
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        fullscreenOrientation="all"
        onEnd={() => onClose()}
        // navigator={navigation}
        />
    )
}

export default Video;