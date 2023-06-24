import { CssBaseline } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import './MainBlog.css';
import { useLocation, useNavigate } from 'react-router-dom';


function MainBlog() {
  const navigate = useNavigate();
  // const changeText = (evt) => {
  //   article = {article,head=}
  // }
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log("first")
    navigate('../');

  }

  const {state} = useLocation(); 
  const {title,author,text} = state;

  return (
    <>
    <CssBaseline />
    <div className="main-blog">

      
        <div className='blog'>
            <h1 className='headTitle'>{title}</h1>
            <h2 className='headAuthor'> - {author}</h2>
            <div  className='blog-desc'>
                <h3>{text}</h3>
            </div>
            
        </div>
        
        <div className='btn'>
          <Button onClick={handleSubmit} variant="contained" endIcon={<HomeIcon />}>
               Return Home
          </Button>
        </div>
            
    </div>
    
    </>
  )
}

export default MainBlog