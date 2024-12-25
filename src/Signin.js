import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Signin() {
    const Form=styled.header`
    .division{
        margin:10px;
        margin-left: 450px;
        margin-top: 45px;
        height:300px;
        width:470px;
        padding:60px;
        background-color:black;
        padding-top: 30px;
      }
      img{
        height:30px;
        width:30px;
      }
      h1{
        color:white;
      }
      .btn1{
        background-color:black;
        color:white;
        margin-right:20px;
      }
      .la5{
        color:white;
        font-size:25px;
      }
      .btn2{
         background-color:#F76E11;
         border-radius:30px;
         border:none;
         height:50px;
         width:150px;
         font-size:20px;
         color:white;
      }
      input{
        height:40px;
        background-color:rgb(69, 67, 67);
        color:white;
        border:none;
      }
    `;
  return (
    <>
    <Form>
    <div className='division'>
      <h1><button className='btn1'><NavLink to="/" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>LET'S GET <br/>STARTED</h1>
      <form>
      <label className="la5">Mobile Number</label><br/><br/>
      <input type="text"></input><br/><br/>
      <button className="btn2 " type="submit">Proceed</button>
      </form>
    </div>
    </Form>
    </>
  )
}
