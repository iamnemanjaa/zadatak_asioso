import React from 'react'
import '../App.css'
import './HeroSection.css';
import '../components/Navbar/button.css';
import Video3 from '../assets/videos/video-3.mp4';
import Button from './UI/Button/Button';

function HeroSection() {
  return (
    <>
      <div className='hero-container'>
        <video src={Video3} loop autoPlay={true} muted></video>
        <h1>WE MAKE DIGITAL BUSINESS SIMPLE</h1>
        <p>In everything we do, we simply want to inspire people. Through our ideas we strengthen brands and inspire their customers. We create great digital experiences for your visitors.</p>
        <div className='hero-btns'>
          <Button>GET STARTED</Button>
          <Button> WATCH TRAILER<i className='far fa-play-circle' /></Button>
        </div>
      </div>
    </>
  );
};

export default HeroSection
