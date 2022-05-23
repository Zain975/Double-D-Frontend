import React, { useEffect, useState } from "react";
import Music from "../../components/music/Music";
import axios from "../../axios";
import "./music.css";
import SearchAudio from "../../components/searchAudio/SearchAudio";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function MusicPage() {
  const [audio, setAudio] = useState([]);
  const [background, setBackground] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/setBackground/getMusicBg");
      setBackground(req.data);
    }
    fetchData();
  }, []);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/uploads/audiolistt");
      setAudio(req.data);
    }
    fetchData();
  }, []);

  return (
    <div
      className='music'
      style={{ backgroundImage: `url(${background.imgUrl})` }}
    >
      <Link to='/menu'>
        <div className='back'>
          <ArrowBackOutlinedIcon style={{ width: "100px", height: "80px" }} />
          Back
        </div>
      </Link>
      <div className='music-search'>
        <SearchAudio />
      </div>
      <div className='music-audios'>
        {audio.map((audio) => (
          <Music key={audio._id} audio={audio} />
        ))}
      </div>
    </div>
  );
}

export default MusicPage;
