import React, {  useState,useCallback } from "react";
import axios from "axios";

function New(props) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")
  const [image, setImage] = useState("")

  const selectImage = useCallback((e) => {
    let files = e.target.files
    let reader = new FileReader();
    
    reader.readAsDataURL(files[0]);
    reader.onload = () => {
      setImage(reader.result);
      console.log("読み込み成功",reader);
    }
  }, [])

  const createFormData = () => {
    const formData = new FormData()
      formData.append('post[title]', title)//キーと値
      formData.append('post[content]', content)
      formData.append('post[price]', price)
      formData.append('post[image]', image) //imageを追加
      console.log('formDate',formData);
    return formData
}

const sendFormData = async () => {      
  const url = 'http://localhost:3001/posts'
  const data = await createFormData()   //formdataが作成されるのを待つ
  const config = {
    headers: {
      'content-type': 'multipart/form-data'// 画像ファイルを取り扱うのでform-dataで送信
    }
  }
  axios.post(url, data, config)
  .then(response => {
    console.log("image_post_res",response) 
  }).catch(error => {
    console.log(error)
  })
    // const posts = Array.from(props.posts);
    // const post = response.data;
    // posts.push(post);
    // props.setPosts(posts);
    // console.log("Array",posts);
   
  };

  return (
  <div>
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

      <label>
        <input
          type="file" 
          onChange={(e) => selectImage(e)}/>
      </label>
      <img src={image} width={200}/>

      <button onClick={sendFormData}>送信</button>
  </div>
    
    
  );
}
export default New;


