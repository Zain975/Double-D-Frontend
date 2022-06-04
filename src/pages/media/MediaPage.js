import React, { useEffect, useState } from "react";
import "./media.css";
import Video from "../../components/video/Video";
import axios from "../../axios";
import SearchMedia from "../../components/searchMedia/SearchMedia";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function MediaPage() {
  const [background, setBackground] = useState([]);
  const [video, setVideo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/setBackground/getMediaBg");
      setBackground(req.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/uploads/videolistt");
      setVideo(req.data);
    }
    fetchData();
  }, []);
  return (
    <div
      className='media'
      style={{ backgroundImage: `url(${background.imgUrl})`,
        height: "1080px",
        width: "5760px", }}
    >
      <Link to='/menu'>
        <div className='back'>
          <ArrowBackOutlinedIcon style={{ width: "100px", height: "80px" }} />
          Back
        </div>
      </Link>
      <div className='media-search'>
        <SearchMedia />
      </div>
      <div className='media-videos'>
        {video.map((video) => (
          <Video key={video._id} video={video}></Video>
        ))}
      </div>
    </div>
  );
}

export default MediaPage;
