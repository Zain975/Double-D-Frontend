import React, { useEffect, useState } from "react";
import "./menu.css";
import axios from "../../axios";
// import { Button, Stack } from "@mui/material";
import Name from "../../components/name/Name";
import { Link } from "react-router-dom";
import mylife from "../../img/mylife.png";
import domotics from "../../img/demotics.png";
import tv from "../../img/tv.png";
import music from "../../img/music.png";
import backgroundd from "../../img/backgroundd.png";
import utility from "../../img/utility.png";
import PermMediaOutlinedIcon from "@mui/icons-material/PermMediaOutlined";
function Menu() {
  const [background, setBackground] = useState([]);

  const [time, setTime] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/setBackground/getMenuBg");
      setBackground(req.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/timezone/time");
      setTime(req.data);

      // setInterval(fetchData, 1000);
    }
    fetchData();
  }, []);

  return (
    <div
      className='menu'
      style={{ backgroundImage: `url(${background.imgUrl})` }}
    >
      {/* <h2 className='menu-time'>{time.data}</h2> */}
      <div className='menu-options'>
        <button className='menu-button'>
          <Link to='media'>
            <img className='menu-img' src={backgroundd} />
            Background mode
          </Link>
        </button>
        <button className='menu-button'>
          <Link to='myLife'>
            <img className='menu-img' src={mylife} /> My life mode
          </Link>
        </button>
        <button className='menu-button'>
          <img className='menu-img' src={utility} />
          Utility mode
        </button>
        <button className='menu-button'>
          <Link to='music'>
            <img className='menu-img' src={music} />
            Music mode
          </Link>
        </button>
        <button className='menu-button'>
          <Link to='home'>
            <img className='menu-img' src={domotics} />
            Domotics mode
          </Link>
        </button>
        <button className='menu-button'>
          <Link to='apps'>
            <img className='menu-img' src={tv} />
            TV mode
          </Link>
        </button>
      </div>
      <Name />
    </div>
  );
}

export default Menu;
