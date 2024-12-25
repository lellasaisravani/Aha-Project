import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Homesee3() {
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
      <h2> <button className='btn1'><NavLink to="/" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Recently Added</h2>
    <div className='main'>
        <Seeallcards name="Parugu" url="https://image-resizer-cloud-api.akamaized.net/image/403D1EDD-AD4F-49A6-9944-334B3CCD8F4E/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Memu" url="https://image-resizer-cloud-api.akamaized.net/image/82A70C48-49A9-421A-BB67-87605600FCEB/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Geethanjali" url="https://image-resizer-cloud-api.akamaized.net/image/225FF675-97AA-4297-98A6-A240AF5900B4/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Lovely" url="https://image-resizer-cloud-api.akamaized.net/image/AE587FAA-F596-4750-8635-915F1D543E55/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Current Theega" url="https://image-resizer-cloud-api.akamaized.net/image/A000639B-97B6-4C11-A4E9-AB1C18853BCD/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Jhansi" url="https://image-resizer-cloud-api.akamaized.net/image/DA2FDB7E-6372-4585-8391-7E25BC3DF3D6/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Dhoni" url="https://image-resizer-cloud-api.akamaized.net/image/5EA3EEBC-DD5E-4BB7-8A41-C865B8B7A804/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Bhadram" url="https://image-resizer-cloud-api.akamaized.net/image/215D5738-D0A3-490E-B02A-AC388A131A69/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
