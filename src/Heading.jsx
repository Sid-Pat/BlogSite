import React from 'react'
import './Heading.css';
import Button from '@mui/material/Button';
import CreateTwoToneIcon from '@mui/icons-material/CreateTwoTone';
import {useNavigate} from 'react-router-dom';

function Heading() {
  let navigate = useNavigate();
  return (
    <>
        <div className="main">
        <h1 className="main-heading">
        <span className="main-heading-primary">BlogDrop</span>
        <span className="main-heading-secondary">Simply Awesome</span>
        </h1>
        <div className='btn'>
        <Button onClick={()=>{
          navigate("/read_Blogs");
        }} 
        variant="contained" startIcon={<CreateTwoToneIcon/>} size="large">
            Read Blog
        </Button>
        </div>
        </div>
    </>
  )
}

export default Heading