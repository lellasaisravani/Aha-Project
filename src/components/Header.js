import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from "./Nav.js";
const Header=()=> {
    const HeadingMain=styled.header`
    img{
        width:150px;
        height:60px;
        padding-top:3.5px;
        padding-right:-20px;
        
    }
    height:4rem;
    padding:0 1rem;
    background-color:rgb(29, 30, 32);
    display:flex;
    justify-content:space-between;
    align-items:center;
    button{
        margin:10px;
        width:40px;
        height:40px;
        background-color:rgb(29, 30, 32);
        color:rgb(255, 255, 255);
        border:none;
    }
    .buttons{
        padding-left:300px;
        display:flex;
        flex-direction:row;
        background-color:rgb(29, 30, 32);
        height:64px;
    }
    button img{
        height:20px;
        width:20px;
    }
    .button1{
        width:100px;
        background-color:#F76E11;
        border-radius:30px;
    }
    .Nav_List{
        text-decoration:none;
        text-transform:lower-case;
        font-size:12px;
        color:rgb(255, 255, 255);
    }
    .button2{
        width:60px;
        background-color:#F76E11;
        border-radius:30px;
    }
    input{
        margin-top:19px;
        background-color:rgb(17, 17, 17);
        color:white;
        border-color:rgb(105, 103, 103);
        border-radius:10px;
        height:18px;
    }
    `;
  return (
    <div className='header'>
        <HeadingMain>
            <NavLink>
                <img src="https://the-media-ant.mo.cloudinary.net/medias/63187639a7fda9751cb0083a/1662547591729/logo%20of%20aha_logo.png?tx=w_350" alt=""/>
            </NavLink>
            <Nav/>
            <div className='buttons'>
            <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IGrfeSvI4s0XvRAkYxIoPYJS-oTEY0RGSw&usqp=CAU"/></button>
                <form>
                    <input type="text" placeholder='Search Title,Movie or Cast'></input>
                </form>
            <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSch5VhsfoGrEU-mEM93r9Xu3alwRdUdgTDdUM2tf1OM7dmQmetfQkW7cqnce8sT3uRZ18&usqp=CAU"/></button>
            <button className='button1'><NavLink to="/subscribe" className="Nav_List">Subscribe Now</NavLink></button>
            <button className='button2'><NavLink to="/signin" className="Nav_List">Sign in</NavLink></button>
            </div>
        </HeadingMain>
    </div>
  )
}
export default Header
