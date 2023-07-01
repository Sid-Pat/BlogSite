import {React, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { CssBaseline } from '@mui/material';
import './BlogInput.css';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import {useNavigate} from 'react-router-dom';
import {addDoc, collection} from 'firebase/firestore'
import {auth, db} from './firebase-config'


let tr = {"author":{"id":"","name":""},"title":"","text":""}

export default function BasicInput({isAuth}) {

    const [blog,setBlog] = useState(tr);


    const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log({blog})
    //     navigate('../my_blog',{state:{...blog}});
    // }

    const handleChange = (e) => {
        const {name,value} = e.target;
      
        setBlog({...blog,
                [name]:value});
    }

    const postsCollectionRef  = collection(db,"posts");
    const createPost = async (event) => {
        event.preventDefault();
        // console.log(auth.currentUser.uid);
        // console.log({blog})
        await addDoc(postsCollectionRef, 
          {...blog,author:{id:auth.currentUser.uid,name:auth.currentUser.displayName}}
        );
        navigate('/');
      

    }

    useEffect(() => {
      if(!isAuth){
        navigate("/login");
      }
    })
    // useEffect(() => {
    //     localStorage.setItem('dataKey', JSON.stringify(data));
    //   }, [blog]);


  return (
    <>
    <CssBaseline />
    <div className='centered'>
    <div className='borderedBox'>
    
    <Box
        onSubmit={createPost}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        border:"black 2px soliid",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Blog Title" variant="outlined" value={blog.title} onChange={(e)=>handleChange(e)} name="title" style = {{width: 500}}/>
      <br />
    
    <TextField
          onChange={(e)=>handleChange(e)}
          id="outlined-multiline-static"
          label="My Blog"
          multiline
          rows={10}
          name='text'
          value={blog.text}
          style = {{width: 500}}
        />

        <Button type="submit" variant="contained" endIcon={<CreateIcon />}>
            Create
        </Button>
    </Box>
    
    </div>
    </div>
    </>
  );
}