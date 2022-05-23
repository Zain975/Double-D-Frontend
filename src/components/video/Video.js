import React, { useEffect, useState } from "react";
import "./video.css";
import { Link } from "react-router-dom";
import Name from "../name/Name";
import play from "../../img/play.png";

// import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
// import Typography from "@mui/material/Typography";
// import { Button, CardActionArea, CardActions } from "@mui/material";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 450,
//     paddingBottom: 25,
//     marginBottom: 20,
//   },
//   media: {
//     height: 150,
//     width: 250,
//     margin: 6,
//   },
// });

function Video(props) {
  // const [video, setVideo] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const req = await axios.get("/uploads/videolist");
  //     setVideo(req.data);
  //   }
  //   fetchData();
  // }, []);

  // console.log(video);
  // const classes = useStyles();
  const { video } = props;

  return (
    <div className='video'>
      <Link to={{ pathname: `/watch/${video._id}`, video: video }}>
        <div className='video-box'>
          <img className='video-img' src={play} />
          <h6>{video.title}</h6>
        </div>
      </Link>
      <Name />
    </div>
  );
}

export default Video;
