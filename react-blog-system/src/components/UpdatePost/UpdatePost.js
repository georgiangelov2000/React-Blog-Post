import React, { useState,useEffect } from "react";
import db from "../../firebase";


export const UpdatePost = ( props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() =>{
    let postRef=db
    .collection('posts')
    .doc(props.id)

    postRef
    .get()
    .then(doc=>{
        let {content,title}=doc.data;
        setTitle(title)
        setContent(content)
    })
},[])

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let postRef = db.collection("posts").doc(props.id);
    const postObject = { title, content };

    postRef
      .update(postObject)
      .then((doc) => {
        console.log("Document succesfully written!", doc.id);
      }).catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Update Post</h1>
        <input
          type="text"
          name="postTitle"
          value={title}
          onChange={onTitleChange}
        />
        <input
          type="text"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default UpdatePost;
