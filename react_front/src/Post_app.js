// import React, { useState, useEffect} from "react";
// import axios from "axios";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import Header from './Components/index_header';
// import Main from './Components/index_main'
// import New from './Components/new'
// import Post from "./Components/post";

// const App = () => {
//   const [posts,setPosts] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3001/posts").then((res) =>{
//       const posts = res.data;
//       console.log("posts_get::",posts);
//       setPosts(posts);
//     });
//   },[]);

//   return(
//     <div>
//       <Header></Header>
//       <Main posts={posts}></Main>
//       <New posts={posts} setPosts={setPosts}></New> {/* propsを渡すためにprops名を命名 postsの中身は投稿されたデータ*/}
      
//       <Router>
//         <Switch>
//           <Route exact path="/" />
//           <Route path="/post" component={Post}/>
//         </Switch>
//       </Router>
//     </div>
//   )
// }
// export default App;




// import React, { useState,useEffect } from 'react';
// import axios from 'axios';


// function Main (props) {
    
// return(

//   <div>
//   <ul>
//     {props.posts.map((post) => (
//       <li key={post.id}> {post.title} </li>
//     ))}
//   </ul>

// </div>
// );
// // 上記でApp.jsからpropsを受け取る
// }
//     export default Main;