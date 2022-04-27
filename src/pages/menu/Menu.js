import React, { useEffect, useState } from "react";
import "./menu.css";
import axios from "../../axios";
// import { Button, Stack } from "@mui/material";
import Name from "../../components/name/Name";
import { Link } from "react-router-dom";

function Menu() {
  const [time, setTime] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/timezone/time");
      setTime(req.data);
    }
    fetchData();
  }, []);

  return (
    <div className='menu'>
      <h2 className='time'>{time.data}</h2>
      <div className='options'>
        <button className='button'>
          <Link to='media'>Media</Link>
        </button>
        <button className='button'>
          <Link to='music'>Music</Link>
        </button>
        <button className='button'>
          <Link to='apps'>Apps</Link>
        </button>
        <button className='button'>
          <Link to='home'>Home</Link>
        </button>
      </div>
      <Name />
    </div>
  );
}

export default Menu;
