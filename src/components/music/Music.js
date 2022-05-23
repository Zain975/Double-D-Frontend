import React from "react";
import { Link } from "react-router-dom";
import play from "../../img/play.png";
import Name from "../name/Name";
import "./music.css";

function Music(props) {
  const { audio } = props;
  return (
    <div className='audio'>
      <Link to={{ pathname: `/play/${audio._id}`, audio: audio }}>
        <div className='audio-box'>
          <img className='audio-img' src={play} />
          <h6>{audio.title}</h6>
        </div>
      </Link>
      <Name />
    </div>
  );
}

export default Music;
