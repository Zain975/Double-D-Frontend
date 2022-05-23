import React, { useEffect, useState } from "react";
import Name from "../../components/name/Name";
import "./apps.css";
import netflix from "../../img/netflix.png";
import DAZN from "../../img/dazn.png";
import raiplay from "../../img/raiplay.png";
import rainews from "../../img/rainews.png";
import nowtv from "../../img/nowtv.png";
import disnep from "../../img/disnep.png";
import youtube from "../../img/youtube.png";
import primevideo from "../../img/primevideo.png";
import chilicinema from "../../img/chilicinema.png";
import bbcnews from "../../img/bbcnews.png";
import france24 from "../../img/france24.png";
import ocbs from "../../img/ocbs.png";

import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import axios from "../../axios";
import { height } from "@mui/system";

function Apps() {
  const [background, setBackground] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/setBackground/getAppsBg");
      setBackground(req.data);
    }
    fetchData();
  }, []);

  return (
    <div
      className='apps'
      style={{ backgroundImage: `url(${background.imgUrl})`, height: "1080px" }}
    >
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
        <a className='options-link' href='https://www.dazn.com/'>
          <img src={DAZN} />
        </a>
        <a className='options-link' href='https://www.raiplay.it/'>
          <img src={raiplay} />
        </a>
        <a className='options-link' href='https://www.rainews.it/'>
          <img src={rainews} />
        </a>
        <a className='options-link' href='https://www.nowtv.com/'>
          <img src={nowtv} />
        </a>
        <a className='options-link' href='https://www.disney.com/'>
          <img src={disnep} />
        </a>
        <a className='options-link' href='https://www.youtube.com/'>
          <img src={youtube} />
        </a>
        <a className='options-link' href='https://www.primevideo.com/'>
          <img src={primevideo} />
        </a>
        <a className='options-link' href='https://uk.chili.com/'>
          <img src={chilicinema} />
        </a>
        <a className='options-link' href='https://www.bbc.com/'>
          <img src={bbcnews} />
        </a>
        <a className='options-link' href='https://www.france24.com/'>
          <img src={france24} />
        </a>
        <a className='options-link' href='https://www.ocbs.com/'>
          <img src={ocbs} />
        </a>
      </div>
      <Name />
    </div>
  );
}

export default Apps;
