
import {useState} from "react"
import CommentsCard from "./CommentsCard"
function VideoInfo({videoData}){
    const [videoInfo, setVideoInfo] = useState(videoData)
    const [isVisible, setIsVisible] = useState(true)

    function handleVisibility(){
        setIsVisible(!isVisible)
    }

    function handleLikes(){
        let video = {...videoInfo}
        video.upvotes = video.upvotes + 1
        setVideoInfo(video)
    }

    function handleDisLikes(){
        let video = {...videoInfo}
        video.downvotes = video.downvotes + 1
        setVideoInfo(video)
    }


    return (
        <div>
        <iframe
          width="919"
          height="525"
          src={videoInfo.embedUrl}
          frameBorder="0"
          allowFullScreen
          title={videoInfo.title}
        />
        <h1>{videoInfo.title}</h1>
        <span>{videoInfo.views} views | Uploaded {videoInfo.createdAt}</span>
        <br></br>
        <button onClick={handleLikes}>{videoInfo.upvotes}  👍 </button>
        <button onClick={handleDisLikes}>{videoInfo.downvotes}  👎 </button>
        <br></br>
        <button onClick = {handleVisibility}> {isVisible ? "Hide Comments"  : "Show Commens"}</button>
        {isVisible ? <CommentsCard comments = {videoInfo.comments}/> : ""}
      </div>

    )
}

export default VideoInfo