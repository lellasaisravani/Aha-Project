import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Showsee4() {
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
      <h2> <button className='btn1'><NavLink to="/Shows" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Locked</h2>
    <div className='main'>
        <Seeallcards name="The Loot of a Lifetime" url="https://image-resizer-cloud-api.akamaized.net/image/71768753-DEDB-4B68-8DEB-EEC4C8425C03/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Hired guns" url="https://image-resizer-cloud-api.akamaized.net/image/E5D34C34-E0F5-4411-8789-14C6C3AE5EB6/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Parched" url="https://image-resizer-cloud-api.akamaized.net/image/B4338205-C966-4AF3-A37C-95E848247EBC/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Euphoric Mind" url="https://image-resizer-cloud-api.akamaized.net/image/08D68BCE-49D2-49AD-AB86-5C3CDD086384/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="The Demons Calling" url="https://image-resizer-cloud-api.akamaized.net/image/45C7E020-A7D7-4689-93E6-A786BF7CFC3A/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="A Mare's Nest" url="https://image-resizer-cloud-api.akamaized.net/image/70288CB9-018B-4A0C-8E91-438529F82296/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Tabula Rasa" url="https://image-resizer-cloud-api.akamaized.net/image/3F4843C5-6429-430A-9095-8EF04E70EEFB/0-2x3.jpg?width=225"></Seeallcards>
        </div>
    </X>
    </>
  )
}
