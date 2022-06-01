import React, { useEffect, useState } from "react";
import "./myLife.css";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import YouTubeIcon from "@mui/icons-material/YouTube";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import linkedin from "../../img/linkedin.png";
import pintrest from "../../img/pintrest.png";
import youtubee from "../../img/youtubee.png";

import axios from "../../axios";

function MyLife() {
  const [background, setBackground] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/setBackground/getMyLifeBg");
      setBackground(req.data);
    }
    fetchData();
  }, []);
  return (
    <div
      className='myLife'
      style={{ backgroundImage: `url(${background.imgUrl})`, height: "1080px" }}
    >
      <Link to='/menu'>
        <div className='back'>
          <ArrowBackOutlinedIcon style={{ width: "100px", height: "80px" }} />
          Back
        </div>
      </Link>
      <div className='myLife-options-row'>
        <a className='myLife-options-link' href='https://www.facebook.com/'>
          <img src={facebook} />

          {/* <FacebookIcon style={{ width: "120px", height: "120px" }} /> */}
        </a>
        <a className='myLife-options-link' href='https://www.instagram.com/'>
          {/* <InstagramIcon style={{ width: "120px", height: "120px" }} /> */}
          <img src={instagram} />
        </a>
        <a className='myLife-options-link' href='https://www.linkedin.com/'>
          <img src={linkedin} />

          {/* <LinkedInIcon style={{ width: "120px", height: "120px" }} /> */}
        </a>
        <a className='myLife-options-link' href='https://www.pinterest.com/'>
          <img src={pintrest} />

          {/* <PinterestIcon style={{ width: "120px", height: "120px" }} /> */}
        </a>
        <a className='myLife-options-link' href='https://www.youtube.com/'>
          <img src={youtubee} />

          {/* <YouTubeIcon style={{ width: "120px", height: "120px" }} /> */}
        </a>
      </div>
    </div>
  );
}

export default MyLife;
