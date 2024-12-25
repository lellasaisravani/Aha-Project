import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Moviesee2() {
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
      <h2> <button className='btn1'><NavLink to="/Movies" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Aha Originals</h2>
    <div className='main'>
       <Seeallcards name="Bhamakalapam" url="https://image-resizer-cloud-api.akamaized.net/image/72DD3211-3D3E-4911-92E6-48132F335F5A/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="The American Dream" url="https://image-resizer-cloud-api.akamaized.net/image/AE9D806A-5950-4F13-8FAD-1CFF2AD7DABF/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Senapathi" url="https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Mail Movie" url="https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Super Over" url="https://image-resizer-cloud-api.akamaized.net/image/FE88FDDA-88F4-4BC1-9FF7-57C091AEABA4/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Colour Photo" url="https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Run Movie" url="https://image-resizer-cloud-api.akamaized.net/image/08569A17-6634-4EFD-867C-C6B84A100AEB/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Metro Kathalu" url="https://image-resizer-cloud-api.akamaized.net/image/D39A72E5-274A-4FC1-918E-5F71BE54C662/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
