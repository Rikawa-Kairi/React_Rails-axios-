import React, {  useState, useCallback } from "react";
import axios from "axios";

function Image() {

  const [image, setImage] = useState()

  const selectImage = useCallback((e) => {
    const selectedImage = e.target.files[0]
    setImage(selectedImage)
    console.log("test_image",selectedImage);
  }, [])

  const createFormData = () => {          
    const formData = new FormData()
    if (!image) return                    //imageがundefinedの場合早期リターン
    formData.append('post[image]', image) 
    return formData
  }

  const sendFormData = async () => {      
    const url = 'http://localhost:3001/posts'
    const data = await createFormData()   //formdataが作成されるのを待つ
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    axios.post(url, data, config)
    .then(response => {
      console.log("image_post_res",response)
    }).catch(error => {
      console.log(error.response)
    })
  }


  return (
    <div>
      <input type="file" onChange={(e) => selectImage(e)}/>
      <button onClick={sendFormData}>送信</button>
    </div>
  )
}

export default Image;