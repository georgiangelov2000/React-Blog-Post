import React from "react";
import { Menu } from "antd";
import { Link } from "@reach/router";
const { Item } = Menu;

const Header = (props) => {
  return (
    < div className="app_main_navigation" >
            <Menu mode="horizontal">

                <Item key="posts">
                    <Link to={`/blogs/${props.user.uid}/posts`} style={{ float: 'right' }}>Posts</Link>
                </Item>

                {props.user &&
                    <Item key="create_post">
                        <Link to="/create_post" style={{ float: 'right' }}>Create Post</Link>
                    </Item>
                }

                {!props.user
                    ?
                    <Link to="/sign_in" style={{ float: 'right' }}>Sign In</Link>
                    :
                    <a onClick={props.onSignOut} style={{ float: 'right' }}>Sign Out</a>
                }

            </Menu>
        </div >
  );
};

export default Header;
