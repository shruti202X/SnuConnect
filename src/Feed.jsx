import React, { useState } from "react";
import data from "./data.json";
import CreatePost from "./CreatePost.jsx";
import Post from "./Post.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Feed() {
  const [dataObject, setDataObject] = useState(data);
  const curDate = new Date();
  const myProfileDetails = {
    "Name": "Shruti Bansal",
    "GraduationYear": 2025,
    "Major": "CSE"
  };

  const handlePostDataUpdate = (updatedPostData, index) => {
    // Create a new array with the updated post data
    const updatedDataObject = [...dataObject];
    updatedDataObject[index] = updatedPostData;
    setDataObject(updatedDataObject);
  };

  return (
    <>
      <header className="pt-5">
        <div className="container pt-4 pt-xl-5">
          <div className="row pt-5">
            <div className="col-md-8 text-center text-md-start mx-auto">
              <div className="text-center">
                <h1 className="display-4 fw-bold mb-5"><span className="underline">Posts</span> for you</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="container">
        <div>
          <CreatePost
            dataObject={dataObject}
            setDataObject={setDataObject}
            myProfileDetails={myProfileDetails}
          />
          {/*<pre>{JSON.stringify(dataObject, null, 2)}</pre>*/}
          {dataObject.map((postData, index) => (
            <Post
              key={index}
              postData={postData}
              setPostData={(updatedPostData) =>
                handlePostDataUpdate(updatedPostData, index)
              }
              curDate={curDate}
            />
          ))}
        </div>
      </section>
    </>
  );
}