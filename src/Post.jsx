import React from 'react';
import { Link } from 'react-router-dom';

export default function Post({ postData, setPostData, curDate }) {

  const getDateDiff = () => {
    const postDate = new Date(postData["PostDate"]);
    const secDiff = (curDate - postDate) / 1000;

    if (secDiff < 60) return String(Math.floor(secDiff)) + " sec ago";

    const minDiff = secDiff / 60;
    if (minDiff < 60) return String(Math.floor(minDiff)) + " min ago";

    const hrDiff = minDiff / 60;
    if (hrDiff < 24) return String(Math.floor(hrDiff)) + " hr ago";

    const dayDiff = hrDiff / 24;
    if (dayDiff < 30) return String(Math.floor(dayDiff)) + " day ago";

    const monDiff = dayDiff / 30;
    if (monDiff < 12) return String(Math.floor(monDiff)) + " month ago";

    const yrDiff = monDiff / 12;
    return String(Math.floor(yrDiff)) + " yr ago";
  };

  const handleLikeClick = () => {
    const curCount = postData["Likes"]["count"];
    const curState = postData["Likes"]["state"];

    // Create a new object with updated values
    const updatedLikes = {
      count: curState ? curCount - 1 : curCount + 1,
      state: !curState,
    };

    // Create a new postData object with the updated Likes property
    const updatedPostData = {
      ...postData,
      Likes: updatedLikes,
    };

    // Update the state with the new postData object
    setPostData(updatedPostData);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <b className="card-title">{postData['Name']}</b>
        <span className="card-text">
          ({postData["GraduationYear"]}, {postData["Major"]})
        </span>
        <p className="card-text">{getDateDiff()}</p>
        <p className="card-text">{postData["Content"]}</p>

        {/* Small lines for likes, comments, views, etc. */}
        <div className="d-flex justify-content-between align-items-center">
          <div onClick={handleLikeClick} style={{ cursor: 'pointer' }}>
            <i className="bi bi-heart-fill me-1"
              style={{ color: postData["Likes"]["state"] ? "red" : "gray" }}>
            </i>
            {(postData["Likes"])["count"]}
          </div>
          <div>
            <i className="bi bi-chat-fill me-1"
              style={{ color: "orange" }}></i>
            {Object.keys(postData["Comments"]).length}
          </div>
          <div style={{ cursor: 'pointer' }}>
            <Link to="/project">
              <i className="bi bi-check-circle-fill me-1"
                style={{ color: postData["Applications"]["state"] ? "green" : "gray" }}>
              </i>
            </Link>
            {postData["Applications"]["count"]}
          </div>
          <div>
            <i className="bi bi-eye-fill me-1"
              style={{ color: "blue" }}></i>
            {postData["Views"]["count"]}
          </div>
        </div>
      </div>
    </div>
  );
}
