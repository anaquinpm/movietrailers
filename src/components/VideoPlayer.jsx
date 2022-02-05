import YouTube from "react-youtube";

const VideoPlayer = ({ trailer, setPlay }) => {
  console.log(trailer)
  return (
    <>
      <YouTube
        videoId={trailer}
        containerClassName={"youtube-container"}
        opts={{
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 1,
            controls: 0
          }
        }}
      />
      <button className='hero-button hero-button_close' onClick={() => setPlay(false)}>close</button>
    </>
  );
}

export default VideoPlayer