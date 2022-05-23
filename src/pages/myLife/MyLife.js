import React, { useEffect, useState } from "react";
import "./myLife.css";
import { Link } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
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
          <FacebookIcon style={{ width: "120px", height: "120px" }} />
        </a>
        <a className='myLife-options-link' href='https://www.instagram.com/'>
          <InstagramIcon style={{ width: "120px", height: "120px" }} />
        </a>
        <a className='myLife-options-link' href='https://www.linkedin.com/'>
          <LinkedInIcon style={{ width: "120px", height: "120px" }} />
        </a>
        <a className='myLife-options-link' href='https://www.pinterest.com/'>
          <PinterestIcon style={{ width: "120px", height: "120px" }} />
        </a>
        <a className='myLife-options-link' href='https://www.youtube.com/'>
          <YouTubeIcon style={{ width: "120px", height: "120px" }} />
        </a>
      </div>
    </div>
  );
}

export default MyLife;
