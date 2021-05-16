import React, { useState, useEffect } from "react";
import db from "../../firebase";

const PostDetails = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const postRef = db
        .collection('posts')
        .doc(props.id)

    postRef
        .get()
        .then(doc => {
            const { content, title } = doc.data()
            setTitle(title)
            setContent(content)
        })
}, [])

  return (
    <div>
      <p>Title: {title}</p>
      <p> Posts{content}</p>
    </div>
  );
};

export default PostDetails;
