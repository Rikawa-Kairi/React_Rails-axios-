import React, {  useState } from "react";
import axios from "axios";

import Image from "./img";

function New(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")

  const post = {
    title,
    content,
    price,
  };
  console.log("title_post",post);
  // titleの初期値は""なので変数経由じゃないと


  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`投稿 ${title,content,price}`)
      axios.post('http://localhost:3001/posts',post)
      .then(res => {
        const posts = Array.from(props.posts);
        // getしたデータを代入
        console.log("Array",posts);

        const post = res.data;
        posts.push(post);
        // 投稿したデータをgetしてきたデータにpost
        props.setPosts(posts);
            });
          };

  return (
  <div>
    <form onSubmit={handleSubmit}>
      {/* 送信ボタンクリック時にフォーム内容をhandleSubmitに飛ばして */}
      <label>
        タイトル:
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          // 入力欄が更新された時にonChangeが処理
        />
      </label>

      <label>
        内容:
        <textarea
          value={content}
          placeholder="求める商品の説明。(定価、重さ、賞味期限)"
          onChange={e => setContent(e.target.value)}
        />
      </label>

      <label>
        希望金額:¥
        <input
          type="number"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    <Image></Image>
  </div>
    
    
  );
}
export default New;

