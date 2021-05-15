import React, { useState, useEffect } from "react";
import db from "../../firebase";
import Post from "../Post/Post";

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
    <div>
      {posts.map((x, id) => (
        <Post 
        key={id} 
        id={x.id} 
        title={x.title} 
        content={x.content.substring(1,1000)} 
        />
      ))}
    </div>
  );
};

export default Posts;
