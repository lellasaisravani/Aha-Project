import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Moviesee3() {
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
      <h2> <button className='btn1'><NavLink to="/Movies" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>New Releases</h2>
    <div className='main'>
       <Seeallcards name="Hunt" url="https://image-resizer-cloud-api.akamaized.net/image/D640207C-36E0-4BDB-BDC8-12B1EA8E208A/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Mukhachitram" url="https://image-resizer-cloud-api.akamaized.net/image/2C078FFD-55B4-43EA-8B3C-9F7A66A5445F/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Chittam Maharani" url="https://image-resizer-cloud-api.akamaized.net/image/3B5F0EF1-7D34-4ADB-B91F-42FADCAD9944/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Vallidari madhya" url="https://image-resizer-cloud-api.akamaized.net/image/F5A38384-B8C0-45F1-AB91-AB43A5CB6E86/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Crazy Fellow" url="https://image-resizer-cloud-api.akamaized.net/image/559DCAE9-B20E-4ECA-B281-B79E77EA7845/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Raani" url="https://image-resizer-cloud-api.akamaized.net/image/82A70C48-49A9-421A-BB67-87605600FCEB/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Geetha" url="https://image-resizer-cloud-api.akamaized.net/image/DE913B46-858E-457A-92B7-FC29D2B07C65/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Uniki" url="https://image-resizer-cloud-api.akamaized.net/image/0AA5B8ED-EC9B-453C-ACCB-DFEF68FB29E1/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
