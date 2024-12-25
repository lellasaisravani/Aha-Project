import React from 'react';
import styled from "styled-components";

export default function Newpage(props) {
    const X=styled.header`
      .main{
        display:flex;
        flex-direction:column;
        justify-content: center;
        height:500px;
        width:100%;
    }
      .main2{
        margin:20px;
        width:50%;
        height:320px;
      }
      .div1{
        display:flex;
        flex-direction:row;
        height:50px;
        width:300px;
      }
      .div1 .btn1{
        height:35px;
        width:100px;
        margin:3%;
        border-radius:8px;
        background-color:rgb(80, 77, 77);
        color:white;
        border:none;
      }
      .div1 button{
        height:35px;
        width:50px;
        margin:3%;
        border-radius:8px;
        background-color:rgb(80, 77, 77);
        color:white;
        border:none;
      }
      .div2{
        display:flex;
        flex-direction:column;
        height:200px;
        width:50%;
        padding:8px;
    font-style: normal;
    font-weight: 400;
    font-size: calc(1.1vw + var(--hero-phone-content-size-increase, 0vw));
    line-height: calc(1.5vw + var(--hero-phone-content-size-increase, 0vw));
    align-items: center;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    text-overflow: ellipsis;
    position: absolute; /* Position the background text */
    background: rgb(0, 0, 0); /* Fallback color */
    background: rgba(0, 0, 0, 0.5); /* Black background with 0.5 opacity */
    color: #f1f1f1; /* Grey text */
      }
      .para{
        display: inline-block;
    flex-direction: column;
    max-width: var(--title-phone-max-width,15em);
    margin: 0;
    color: #fff;
    font-size: calc(2.5vw + var(--hero-phone-content-size-increase, 0vw));
    font-style: normal;
    font-weight: 900;
    line-height: calc(3.5vw + var(--hero-phone-content-size-increase, 0vw));
    letter-spacing: 0;
    text-align: left;
      }
      div3{
        display:flex;
        flex-direction:row;
        height:100px;
        width:300px;
      }
      .div3 button{
        height:40px;
        width:150px;
        border-radius:30px;
        margin:230px 3px 10px 6px;
        border:white;
        background-color:rgb(80, 77, 77);
        color:white;
      }
      .div3 button:active{
         background-color:#F76E11;
      }
    `;
  return (
    <>
    <X>
    <div className='main'>
        <div className='main2'>
      <div className='div1'>
        <button className='btn1'>{props.btn1}</button>
        <button>U/A</button>
        <button>7+</button>
      </div>
      <div className='div2'>
      <div className='para'>{props.movie}<br/></div>
      <p>{props.para1}</p>
      <p>{props.para2}</p>
       </div>
       <div className='div3'>
          <button>Play Trailer</button>
       </div>
    </div>
    </div>
    </X>
    </>
  )
}