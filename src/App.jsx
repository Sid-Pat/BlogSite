import React, { useEffect, useState } from 'react'
import './App.css'
import Landing from './Landing';
import MainBlog from './MainBlog';
import Error from './Error';
import Navbar from './Navbar';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
// import Footer from './Footer';
import { CssBaseline } from '@mui/material';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';
import BlogInput from './BlogInput';
import Login from './pages/Login';
import { useLocation } from 'react-router-dom';


function App() {
  
  const [isAuth,setIsAuth] = useState(false);
  // const location = useLocation();
  // console.log(location.state);
  // setIsAuth(location.state);
  // useEffect(() => {
  //   setIsAuth(location.state.auth);
  //   // setIsAuth(false);
  // },[location]);

  
  return (
    <>
    <div className='bg-main'>
    <CssBaseline />
    
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/input_Blog" element={<BlogInput />} />
            <Route path="/my_Blog" element={<MainBlog />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
            <Route path="*" element={<Error /> }/>
        </Routes>
        <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: 'BlogDrop Official INC',
        url: 'https://yuque.com',
        description: 'Footer',
        openExternal: true,
      },
    ]}
    backgroundColor= '#0f0f0f'
    bottom="Made with ❤️ by Siddhant Patil"
  />
    </div>
    </>
  )
}

export default App