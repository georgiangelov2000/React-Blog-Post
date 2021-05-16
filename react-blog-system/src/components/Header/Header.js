import React from "react";
import { Menu } from 'antd';
import { Link } from "@reach/router";
const { Item } = Menu;


const Header = () => {
  return (
    <div className="app_main_navigation">
      {" "}
      <Menu mode="horizontal">
        <Item key="posts">
          <Link
            to={`/posts`}
            style={{ float: "right" }}
          >
            Posts
          </Link>
        </Item>

          <Item key="create_post">
            <Link to="/create_post" style={{ float: "right" }}>
              Create Post
            </Link>
          </Item>

          <Item key="sign_up">
            <Link to="/sign_up" style={{ float: "right" }}>
              Sign up
            </Link>
          </Item>

          <Item key="sign_in">
            <Link to="/sign_in" style={{ float: "right" }}>
              Sign up
            </Link>
          </Item>
        
      </Menu>
    </div>
  );
};

export default Header;
