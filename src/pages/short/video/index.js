import './styles.css'

import React, {useState, useRef} from 'react';
import player from '../../../asserts/player.svg';


const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (isPlaying) {
            video.pause();
        } else {
            video.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgressChange = (e) => {
        const video = videoRef.current;
        const newTime = (e.target.value / 100) * video.duration;
        video.currentTime = newTime;
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        setProgress((video.currentTime / video.duration) * 100);
        if (video.currentTime >= video.duration) {
            setIsPlaying(false);
        }
    };

    return (
        <div className={"video-player"}>
            <video ref={videoRef} onTimeUpdate={handleTimeUpdate} onClick={handlePlayPause}>
                <source src="https://bantang.nuojing.club//landing-h5/20240606-104724.mp4" type="video/mp4"/>
            </video>

            {!isPlaying && (
                <img className={"player-img"} src={player} onClick={handlePlayPause} alt="player"/>
            )}

            <div className={"progress-bar-container"}>
                <span className={"progress-time"}>00:13/01:55</span>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={progress}
                    onChange={handleProgressChange}
                    className={"progress-bar"}
                />
            </div>
        </div>
    );
};

export default VideoPlayer;
// const ShortVideoComponent = () => {
//
//
//     return (
//
//     <div className={"video-container"}>
//         <video className={"video-fill"}   muted={true} autoPlay={true}>
//             <source src="https://bantang.nuojing.club//landing-h5/20240606-104724.mp4" type="video/mp4"/>
//             Your browser does not support the video tag.
//         </video>
//     </div>
//
// );
// };
//
// export default ShortVideoComponent;
