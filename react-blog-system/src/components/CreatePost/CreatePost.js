import { navigate } from "@reach/router";
import db from "../../firebase";
import React, { useState } from "react";
import { PageHeader, Input, Button } from "antd";
const { TextArea } = Input;


export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (event) => setTitle(event.target.value);
  const onContentChange = (event) => setContent(event.target.value);

  const onCreatePost = () => {
    const postRef = db.collection("posts");
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
          <Button type="primary" size="large" onClick={onCreatePost}>
            Create Post
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
