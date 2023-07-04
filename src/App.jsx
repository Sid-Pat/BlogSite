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
import Login from './Login';
import { useLocation } from 'react-router-dom';
import ParticleBackground from 'react-particle-backgrounds'
import Heading from './Heading';
import SpecButton from './SpecButton';
import ReadBlog from './ReadBlog';



function App() {

  // const settings = {
  //   canvas: {
  //     canvasFillSpace: true,
  //     width: 200,
  //     height: 200,
  //     useBouncyWalls: true
  //   },
  //   particle: {
  //     particleCount: 100,
  //     color: "#1769aa",
  //     minSize: 5,
  //     maxSize: 12
  //   },
  //   velocity: {
  //     directionAngle: 0,
  //     directionAngleVariance: 30,
  //     minSpeed: 0.2,
  //     maxSpeed: 4
  //   },
  //   opacity: {
  //     minOpacity: 0,
  //     maxOpacity: 0.5,
  //     opacityTransitionTime: 5000
  //   }
  // }
  
  const [isAuth,setIsAuth] = useState(localStorage.getItem("isAuth"));
  // const location = useLocation();
  // console.log(location.state);
  // setIsAuth(location.state);
  // useEffect(() => {
  //   setIsAuth(location.state.auth);
  //   // setIsAuth(false);
  // },[location]);

  
  return (
    <>
    <CssBaseline />
    <div className='bg-main'>
        <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
        <Routes>
            <Route path="/" element={<Landing />}/>
            <Route path="/input_Blog" element={<BlogInput isAuth={isAuth}/>} />
            <Route path="/read_Blogs" element={<ReadBlog isAuth={isAuth}/>}/>
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
{/* <ParticleBackground settings={settings} className="bg-main"/> */}

    </div>
    </>
  )
}

export default App