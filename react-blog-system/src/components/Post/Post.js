import React from 'react'
import {Link} from 'react-router-dom';

const Post = (props) => {
    return (
        <div>
            <p>Title":{props.title}</p>
            <p>Content:{props.content}</p>
            <Link to={`/post/${props.id}`}>Read full Article</Link>
            <Link to={`/update_post/${props.id}`}>Update Article</Link>
        </div>
    )
}

export default Post
