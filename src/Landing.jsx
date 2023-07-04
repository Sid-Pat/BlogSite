import React from 'react'
import './App.css'
import Navbar from './Navbar';
import { CssBaseline } from '@mui/material';
// import ParticleBackground from 'react-particle-backgrounds'
import Heading from './Heading';
// import SpecButton from './SpecButton';

function Landing() {


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

  return (
    <div className='bg-main'>
        <CssBaseline/>

        <Heading />
        {/* <ParticleBackground settings={settings} className="bg-main"/> */}
    </div>
  )
}

export default Landing