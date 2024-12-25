import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Showsee3() {
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
      <h2> <button className='btn1'><NavLink to="/Shows" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Aha Original</h2>
    <div className='main'>
        <Seeallcards name="Agent Anand Santosh" url="https://image-resizer-cloud-api.akamaized.net/image/B890CBBD-4869-4D11-8740-AFD01DF72377/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="3 Roses" url="https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Kudi Yedamaithe" url="https://image-resizer-cloud-api.akamaized.net/image/85D56847-BEB7-4C31-8F03-72FB55EE3FA6/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Locked" url="https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="11th Hour" url="https://image-resizer-cloud-api.akamaized.net/image/CF86398B-F897-4DEA-B067-2AEC473A7309/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Anya's Tutorial" url="https://image-resizer-cloud-api.akamaized.net/image/ECE0631E-D9E1-45ED-8631-C803D2E80424/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="#BFF" url="https://image-resizer-cloud-api.akamaized.net/image/F1AFA21D-A62C-4950-B303-FC7242559971/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Alludu Gaaru" url="https://image-resizer-cloud-api.akamaized.net/image/0AA73A1E-4E26-45C5-9891-FBA787699AD4/0-2x3.jpg?width=225"></Seeallcards>
        </div>
    </X>
    </>
  )
}
