import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Cards(props){
    const Card=styled.image`
  .container{
    margin:10px;
    background-color:rgb(29, 30, 32);
    height:310px;
    width:228px;
  }
  .container {
    position: relative;
    top: 0;
    transition: top ease 0.5s;
  }
  .container:hover {
    top: -15px;
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
    return(
        <>
        <Card>
        <div className="container">
            <div className="Image">
            <Link target="_blank" rel="noreferrer">
                <img src={props.url} alt=""/>
            </Link>
            </div>
            <div className="details">
                <h2>{props.name}</h2><br/>
            </div>
        </div>
        </Card>
        </>
    );
}
export default Cards
