import React from "react";
import { Link } from "@reach/router";
import { Card } from "antd";

const Post = (props) => {
  return (
    <div className="post_snippet_container">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={props.title}
        extra={
          <div>
            <Link to={`/post/${props.id}`}>Read full Article </Link>
            <Link to={`/update_post/${props.id}`}>Update Article</Link>
          </div>
        }
      >
        <p className="article_content">
          {props.content.split("\n").map((paragraph, idx) => {
            return <p key={idx}>{paragraph}</p>;
          })}
        </p>
      </Card>
    </div>
  );
};

export default Post;
