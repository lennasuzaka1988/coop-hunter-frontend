import './VideoPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'
import React from "react";

function VideoPlayer(props) {
    const mediaRef = React.createRef();
    const playButtonRef = React.createRef();

    function onPlay() {
        playButtonRef.current.hidden = true;
        mediaRef.current.play();
    }

    function onPause() {
        playButtonRef.current.hidden = false;
    }

    return (
        <div className='video-container'>
            <button
                className='video-button'
                ref={playButtonRef}
                onClick={onPlay}
            >
                <FontAwesomeIcon icon={faPlayCircle}/>
            </button>
            <video
                controls
                controlsList='nodownload'
                disablePictureInPicture
                onPlay={onPlay}
                onPause={onPause}
                ref={mediaRef}
            >
                <source
                    src={props.videoSrc}
                    type='video/webm'
                />
            </video>
        </div>
    );
}

export default VideoPlayer;
