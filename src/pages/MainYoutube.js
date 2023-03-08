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
            showinfo: 0,
        },
    }


    return (
        <>
            <YouTube videoId="raw3Nu0_mBQ" opts={option} />
        </>
    )
}

export default MainYoutube;