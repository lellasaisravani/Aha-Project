import React from 'react';
import styled from "styled-components";

function Seeallcards(props){
    const Seeall=styled.header`
    .container{
      margin:10px;
      background-color: rgb(17, 17, 17);
      height:310px;
      width:228px;
    }
    .Image{
      height:200px;
      width:150px;
      padding-bottom:1px;
    }
    img{
      height:270px;
      width:230px;
      border-radius:8px;
    }
    
    .details{
      align-items:center;
      justify-content: center;
      height:0px;
      padding:20px;
      color:white;
    }
    h2{
      font-size:20px;
      font-family:Calibri;
      font-weight:150;
    }
    *{
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
    `;

  return (
      <>
        <Seeall>
        <div className="container">
            <div className="Image">
                <img src={props.url} alt=""/>
            </div>
            <div className="details">
                <h2>{props.name}</h2><br/>
            </div>
        </div>
        </Seeall>
        </>
  )
}
export default Seeallcards;
