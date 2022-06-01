import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useLocation } from "react-router-dom";
import "./watch.css";
import ReactNetflixPlayer from "react-netflix-player";

export default function Watch(props) {
  const location = useLocation();
  const video = location.video;

  return (
    <div className='watch'>
      <Link to='/media'>
        <div className='back'>
          <ArrowBackOutlinedIcon style={{ width: "100px", height: "80px" }} />
          Back
        </div>
      </Link>

      <video
        className='watch-video'
        autoPlay
        progress
        controls
        src={video.videoUrl}
        // src='https://mp3-file-upload.s3.ap-southeast-1.amazonaws.com/1649219866463_01c0848e-a5a0-47cf-b0a8-7083214779bb.mp4'
      />
      {/* <ReactNetflixPlayer
        src={video.videoUrl}
        backButton={true}
        autoPlay={true}
      /> */}
    </div>
  );
}
