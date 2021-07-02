import React, { useState } from "react";
import axios from "axios";

function New() {

  const [title, setTitle] = useState("");


  const post = {
    title
  };
  console.log(post);

  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`投稿 ${title}`)
      axios.post('http://localhost:3001/posts',post)
      .then(res => {

        const posts = res.data
        setTitle(posts.title);
        
        console.log('res',posts)
            })}
 

  return (
    <form onSubmit={handleSubmit}>
      {/* フォーム内容をhandleSubmitに飛ばして */}
      <label>
        タイトル:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          // stateの更新打ち込んだ文字が一つずつ入る
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    
  );
}
export default　New;
