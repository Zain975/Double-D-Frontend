import React, { useEffect, useState } from "react";
import "./search.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "../../axios";
import { Link } from "react-router-dom";

function SearchMedia() {
  // const { video } = props;
  const [query, setQuery] = useState("");

  const [video, setVideo] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/uploads/videolistt");
      setVideo(req.data);
    }
    fetchData();
  }, []);
  return (
    <div className='search'>
      <div className='search-container'>
        <input
          // type='text'
          placeholder='Search'
          className='search-input'
          key='random1'
          // value={keyword}
          onChange={(event) => setQuery(event.target.value)}
        />
        <SearchIcon style={{ color: "gray", fontSize: "70px" }} />
      </div>
      <div className='search-item'>
        {video
          .filter((vid) => {
            if (query === "") {
              return;
            } else if (vid.title.toLowerCase().includes(query.toLowerCase())) {
              return vid;
            }
          })
          .map((vid, index) => (
            <div className='search-box' key={index}>
              <Link to={{ pathname: `/watch/${vid._id}`, video: vid }}>
                <p>{vid.title}</p>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchMedia;
