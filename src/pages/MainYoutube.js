import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const MainYoutube = () => {


    const option = {
        width: '100%',
        height: '600',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            mute: 1,
            controls: 0,
            loop: 1,
        },
    }


    return (
        <>
            <YouTube videoId="2g811Eo7K8U" opts={option} />
        </>
    )
}

export default MainYoutube;