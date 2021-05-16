import React, { useState, useEffect } from "react";
import Post from "../Post/Post";
import { PageHeader } from 'antd';
import db from "../../firebase";
import _ from 'lodash'


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = db.collection("posts");

    postsRef.get().then((posts) => {
      posts.forEach((post) => {
        const data = post.data();
        const { id } = post;

        let payload = {
          id,
          ...data,
        };
        setPosts((posts) => [...posts, payload]);
      });
    });
  }, []);

  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)",
          }}
          title="Posts"
        />
      </div>
      <div className="articles_container">
        {_.map(posts, (x, id) => (
          <Post
            key={id}
            id={x.id}
            title={x.title}
            content={x.content.substring(1, 1000)}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
