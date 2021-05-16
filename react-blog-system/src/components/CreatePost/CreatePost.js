import React, { useState } from "react";
import { navigate } from "@reach/router"
import db from "../../firebase";


export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let postRef = db.collection("posts");
    const postObject = { title, content };

    postRef
      .add(postObject)
      .then((doc) => {
        console.log("Document succesfully written!" + doc.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
    setTitle("");
    setContent("");
    navigate(`/posts`)
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>Create Post</h1>
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

export default CreatePost;
