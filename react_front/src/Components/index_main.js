import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Main () {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(['http://localhost:3001/posts'])
    .then(res => {
          const posts = res.data;
          console.log("posts::",posts);
          setPosts(posts);
        })
    }, [])
    
return(

  <div>
    <ul>
    {
      posts.map(post => <li key={post.id}> {post.title}</li>)
    }
    </ul>
        
  </div> 
)
}
    export default Main;