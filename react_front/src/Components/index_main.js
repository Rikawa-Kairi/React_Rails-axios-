import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './index_header'
import New from './new'

const Main = () => {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((res) =>{
      const posts = res.data;
      console.log("posts_get::",posts);
      setPosts(posts);
    });
  },[]);


  return(
    <div>
      <Header></Header>
      <New posts={posts} setPosts={setPosts}></New> {/* propsを渡すためにprops名を命名 postsの中身は投稿されたデータ*/}

      <ul>
        {posts.map ((post) => (
          <li key={post.id}> {post.title} ::{post.content} ::{post.price} <img src={post.image.url}  alt="img" width={200}/> </li>
    ))}
  </ul>
  
    </div>
    
  )
}
    export default Main;
