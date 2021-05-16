import React, { useState, useEffect } from "react";
import db from "../../firebase";
import { navigate } from "@reach/router"
import { PageHeader, Input, Button } from "antd";
const { TextArea } = Input;

export const UpdatePost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const postRef = db.collection("posts").doc(props.id);

    postRef.get().then((doc) => {
      const { content, title } = doc.data;
      setTitle(title);
      setContent(content);
    });
  }, []);

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onContentChange = (event) => {
    setContent(event.target.value);
  };
  const onUpdatePost = (e) => {
    e.preventDefault();
    const postRef = db.collection("posts").doc(props.id);
    const postObject = { title, content };

    postRef
      .update(postObject)
      .then((doc) => {
        console.log("Document succesfully written!", doc.id);
      })
      .catch((error) => {
        console.log(error.message);
      });
      navigate(`/posts`);
  };

  return (
    <div className="create_post_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)",
          }}
          title="Create Post"
        />
      </div>

      <div className="post_inputs_container">
        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Title</h2>
          </div>

          <div className="post_input">
            <Input
              placeholder="Post title"
              value={title}
              onChange={onTitleChange}
            />
          </div>
        </div>

        <div className="post_input_container">
          <div className="post_input_title">
            <h2>Post Content</h2>
          </div>

          <div className="post_input">
            <TextArea rows={10} value={content} onChange={onContentChange} />
          </div>
        </div>

        <div className="post_input_button">
          <Button type="primary" size="large" onClick={onUpdatePost}>
            Edit Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdatePost;
