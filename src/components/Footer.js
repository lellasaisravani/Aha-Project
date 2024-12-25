import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    const Foot=styled.header`
     .main{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
     }
     .div2{
        height:200px;
        width:200px;
        margin:30px;
     }
     .div1{
        height:200px;
        width:350px;
        margin:20px;
        margin-right:100px;
     }
     .div1 ul li{
        color:white;
     }
     .div1 img{
        padding-left:40px;
     }
     ul li{
        list-style-type: none;
        color:rgb(106, 105, 105);
     }
     h2{
        color:white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif,
        monospace;
        font-size:15px;
        font-weight:150;
      }
    .icons img{
        height:30px;
        width:30px;
        margin:10px;;
    }
    .icons{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .apps img{
        height:30px;
        width:90px;
        margin:10px;;
    }
    .apps{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
    }
    .horizontal_line {
        margin-top:60px;
        background-color:rgb(106, 105, 105);
        width:100%;
        height:0.5px;
        line-height: 60%;
    }
      .copyright{
        color:white;
        fonst-size:10px;
      }
      .copyright ul li{
         margin:40px;
      }
    `;
  return (
    <>
    <Foot>
    <div className='main'>
    <div className='div1'>
      <img src="https://www.aha.video/assets/icons/svg/aha-footer-logo.svg"/>
      <ul>
         <li>Connect with us</li>
         <div className='icons'>
         <li><a href="https://www.instagram.com/ahavideoin/"><img src="https://cdn-icons-png.flaticon.com/128/3955/3955027.png"/></a></li>
         <li><a href="https://www.facebook.com/ahavideoIN"><img src="https://cdn.iconscout.com/icon/free/png-256/facebook-224-498412.png?f=avif&w=128"/></a></li>
         <li><a href="https://www.twitter.com/ahavideoin/"><img src="https://cdn-icons-png.flaticon.com/128/3256/3256013.png"/></a></li>
         </div>
         <li>Download aha mobile app</li>
         <div className='apps'>
         <li><a href="https://play.google.com/store/apps/details?id=ahaflix.tv"><img src="https://www.aha.video/assets/images/googlePlay.png"/></a></li>
         <li><a href="https://apps.apple.com/in/app/aha-ott-movies-webseries/id1488739001"><img src="https://www.aha.video/assets/images/ios.png"/></a></li>
         <li>Contact us:<a href="">support@aha.video</a></li>
         </div>
      </ul>  
    </div>
    <div className='div2'>
      <h2>Must Watch Movies</h2>
      <ul>
         <li>Masooda</li>
         <li>Sardar</li>
         <li>Ori Devuda</li>
         <li>Swathi Muthyam</li>
         <li>DJ Tillu</li>
      </ul>  
    </div>
    <div className='div2'>
      <h2>Popular Telugu Movies</h2>
      <ul>
         <li>Pakka Commercial</li>
         <li>Love Story</li>
         <li>Colour Photo</li>
         <li>Krack</li>
         <li>Sulthan</li>
      </ul>  
    </div>
    <div className='div2'>
      <h2>Genres</h2>
      <ul>
         <li>Telugu Drama Movies</li>
         <li>Telugu Comedy Movies</li>
         <li>Telugu Action Movies</li>
         <li>Telugu Romance Movies</li>
      </ul>  
    </div>
    <div className='div2'>
      <h2>Learn More</h2>
      <ul>
         <li>View Plans</li>
         <li>About Us</li>
         <li>FAQs/Help</li>
         <li>Privacy Policy</li>
         <li>Terms of Services</li>
         <li>Blog</li>
      </ul>  
    </div>
    </div>
    <div className='horizontal_line'></div>
    <div className='copyright'>
        <ul>
            <li>Copyright 2023 Arha and Broadcasting Pvt Ltd.All rights reserved</li>
        </ul>
    </div>
    </Foot>
    </>
  )
}
