import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Showsee2() {
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
      <h2> <button className='btn1'><NavLink to="/Shows" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Dance Ikon</h2>
    <div className='main'>
        <Seeallcards name="Grand finale" url="https://image-resizer-cloud-api.akamaized.net/image/FB8233ED-032D-4023-AAD4-0D8BF091720E/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 1" url="https://image-resizer-cloud-api.akamaized.net/image/3326271F-E20A-40EF-8BB0-EE4DD81B2E7D/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 2" url="https://image-resizer-cloud-api.akamaized.net/image/28DC6DA6-C0CD-4565-8282-375708C86318/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 3" url="https://image-resizer-cloud-api.akamaized.net/image/2BBD7C1B-ADFE-46A2-95DA-89F360419BB1/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 4" url="https://image-resizer-cloud-api.akamaized.net/image/C66290FA-ED61-436D-84A2-7311CE8581D2/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 5" url="https://image-resizer-cloud-api.akamaized.net/image/FE07B033-1851-437C-845E-E595E7CFB1C5/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 6" url="https://image-resizer-cloud-api.akamaized.net/image/7939C7FC-BA00-4740-9086-324171CF9C2E/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Episode 7" url="https://image-resizer-cloud-api.akamaized.net/image/B4F342BB-C897-4B29-B7BE-E1732B0586CA/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
