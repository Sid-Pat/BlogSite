import React, { useEffect, useState } from 'react'
import {collection, getDocs ,doc , deleteDoc} from 'firebase/firestore';
import {db,auth} from "./firebase-config";
import './ReadBlog.css'
import DeleteIcon from '@mui/icons-material/Delete';


function ReadBlog({isAuth}) {
    const [postLists,setPostLists] = useState([]);
    const postsCollectionRef = collection(db,"posts");
    
    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostLists(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
        }
        getPosts();

    })

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    };

  return (
    <div className='homePage'>
        {/* {
            postLists.map((post)=>{
                return <div className="post">{post.title} </div>
            })
        } */}

        
        {postLists.map((post) => {
        return (
          <div key={post.id} className="post">
            {/* {console.log(post.id)}
            {console.log(post.id)} */}
            <div className="postHeader">
              <div className="title">
                <h1> {post.title}</h1>
              </div>
              {/* {console.log(post.author.id)}
              {console.log(auth.currentUser.uid)} */}
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    <DeleteIcon />
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer"> {post.text} </div>
            <h3>@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  )
}

export default ReadBlog