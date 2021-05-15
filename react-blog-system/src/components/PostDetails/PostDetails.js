import React,{useEffect,useState} from "react";
import db from "../../firebase";

const PostDetails = (props) => {
    const [title,setTitle]=useState('');
    const [content,setContent]=useState('');

    useEffect(() =>{
        const postsRef = db
        .collection('posts')
        .doc(props.id)

        postsRef
        .get()
        .then(doc=>{
            let {content,title}=doc.data;
            setTitle(title)
            setContent(content)
        })
    })

    return (
    <div>
      <p>Title":{title}</p>
      <p>Content:{content}</p>
    </div>
  );
};

export default PostDetails;
