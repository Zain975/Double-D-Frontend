import React from "react";
import Name from "../../components/name/Name";
import "./apps.css";
import netflix from "../../img/netflix.png";
import primeVideo from "../../img/primeVideo.png";
import youtube from "../../img/youtube.png";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

function Apps() {
  return (
    <div>
      <Link to='/menu'>
        <div className='back'>
          <ArrowBackOutlinedIcon style={{ width: "100px", height: "80px" }} />
          Back
        </div>
      </Link>
      <div className='options-row'>
        <a className='options-link' href='https://www.netflix.com/'>
          <img src={netflix} />
        </a>
        <a className='options-link' href='https://www.youtube.com/'>
          <img src={youtube} />
        </a>
        <a className='options-link' href='https://www.primevideo.com/'>
          <img src={primeVideo} />
        </a>
      </div>
      <Name />
    </div>
  );
}

export default Apps;
