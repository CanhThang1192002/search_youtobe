import './App.scss';
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';
import Search from './component/Search';
import Home from "./component/Home"
import VideoItem from "./component/VideoItem";


const App = () => {
  const [video, setVideo] = useState([])
  const [query, setQuery] = useState('')
  const [videoitem, setVideoitem] = useState({})
  const search = async () => {
    const res = await axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        maxResults: 30,
        q: query,
        type: 'video',
        key: 'AIzaSyBW1GI6HssxENmmspt-5d9s2Wnqvz8Xejo'
      }
    })

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let obj = {};
          obj.id = item.id.videoId;
          obj.title = item.snippet.title;
          obj.createdAt = item.snippet.publishedAt;
          obj.author = item.snippet.channelTitle;
          obj.description = item.snippet.description;
          result.push(obj);
        })
      }
      setVideo(result);
    }
  }

  const inDay = (day) => {
    let x = (new Date().getTime() - new Date(day).getTime()) / 1000;
    if (x < 3600) {
      return Math.floor(x / 60) + ' giây trước';
    }
    if (x < 86400) {
      return Math.floor(x / 3600) + ' giờ trước';
    }
    if (x < 604800) {
      return Math.floor(x / 86400) + ' ngày trước';
    }
    if (x < 2592000) {
      return Math.floor(x / 604800) + ' tuần trước';
    }
    if (x < 31536000) {
      return Math.floor(x / 2592000) + ' tháng trước';
    }
    return Math.floor(x / 31536000) + ' năm trước';
  }

  useEffect(() => {
    setQuery('video được tìm kiếm nhiều nhất trong tháng');
    search();
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Search setQuery={setQuery} search={search} />} >
          <Route index element={<Home video={video} inDay={inDay} setVideoitem={setVideoitem} />} />
          <Route path="video" element={<VideoItem videoitem={videoitem} inDay={inDay} video={video} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
