import React, { useState } from 'react';

export default function CreatePost({dataObject, setDataObject, myProfileDetails}){
  
  const [text, setText] = useState('');
  const handleTextareaInput = (event) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
    setText(textarea.value);
  };
  const handleSendBtnClick = () => {
    const postObject = {
      "Name": myProfileDetails["Name"],
      "GraduationYear" : myProfileDetails["GraduationYear"],
      "Major": myProfileDetails["Major"],
      "PostDate": new Date(),
      "Content": text,
      "Comments": {},
      "Likes": {
        "state": false,
        "count": 0
      },
      "Applications": {
        "state": false,
        "count": 0
      },
      "Views": {
        "state": true,
        "count": 1
      }
    }

    const updatedDataObject = [...dataObject];
    updatedDataObject.unshift(postObject);

    setDataObject(updatedDataObject);

    setText('');
  }
  
  return (
    <div>
      <textarea
        className="autosize"
        rows="2"
        value={text}
        onChange={handleTextareaInput}
        placeholder="News to share?"
        style={{overflow: 'hidden', resize: 'none',width: '100%'}}
      />
      <button className="btn btn-primary" onClick={handleSendBtnClick}>
        POST<i className="bi bi-arrow-right-square-fill ms-1"></i>
      </button>
    </div>
  );
}