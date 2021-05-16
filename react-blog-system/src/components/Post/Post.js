import React from "react";
import db from "../../firebase";
import { Link } from "@reach/router";
import { Card, Button } from "antd";

const Post = (props) => {
    const onDeletePost=()=>{
        const postRef=db
        .collection("posts")
        .doc(props.id)

        postRef.delete();
    }
  return (
    <div className="post_snippet_container">
      <Card
        style={{ marginTop: 16 }}
        type="inner"
        title={props.title}
        extra={
          <div class="post_snippet_links">
            <Link
              to={`/post/${props.id}`}
              style={{ marginRight: "15px", float: "left" }}
            >
              Read full Article{" "}
            </Link>

            <div className="post_edit_links" style={{ float: "right" }}>
              <Link to={`/update_post/${props.id}`}>Update Article</Link>
            </div>

            <Button onClick={onDeletePost}>
                Delete
            </Button>
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
