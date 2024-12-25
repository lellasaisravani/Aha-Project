import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Kidssee2() {
    const X=styled.header`
    .main{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        background-color:rgb(17, 17, 17);
        height:100%;
        width:100%;
     }
     .btn1{
      background-color: rgb(17, 17, 17);
      color:white;
      margin-right:20px;
    }
    img{
      height:30px;
      width:30px;
      margin-left:20px;
    }
    button{
      border:none;
    }
    h2{
      color:white;
    }
    `;
  return (
    <>
    <X>
      <h2> <button className='btn1'><NavLink to="/Kids" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Magical World</h2>
    <div className='main'>
        <Seeallcards name="Magical Tiffin" url="https://image-resizer-cloud-api.akamaized.net/image/7A693396-AD04-4B54-87A5-EB53594592CF/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Ficus Tree" url="https://image-resizer-cloud-api.akamaized.net/image/92D5CB84-64E5-40DF-89B5-CBB341647200/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Stick" url="https://image-resizer-cloud-api.akamaized.net/image/63E56402-8883-449F-A51E-5DD824571AE8/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Flower" url="https://image-resizer-cloud-api.akamaized.net/image/A80D4968-7B4B-4FD0-8B23-39F4A933EE72/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Book" url="https://image-resizer-cloud-api.akamaized.net/image/B6218B43-9340-452B-BF2E-E153E73ED9E9/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Seeds" url="https://image-resizer-cloud-api.akamaized.net/image/1CC6A951-3BE7-488A-B54B-D51151757FDF/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Shoes" url="https://image-resizer-cloud-api.akamaized.net/image/F78109B0-A939-4DC0-A03B-9D41E9B23373/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Brush" url="https://image-resizer-cloud-api.akamaized.net/image/93DC0F00-616F-4097-893E-414683D58735/0-2x3.jpg?width=225"></Seeallcards>
        </div>
    </X>
    </>
  )
}
