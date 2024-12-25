import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Kidssee4() {
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
      <h2> <button className='btn1'><NavLink to="/Kids" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Maha Ganesha</h2>
    <div className='main'>
        <Seeallcards name="Gajasuras Penance" url="https://image-resizer-cloud-api.akamaized.net/image/54D13CDB-47BD-4F5E-8CF3-DDCFE9437319/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Vishnu Promise" url="https://image-resizer-cloud-api.akamaized.net/image/B35722BC-1EBF-4EE2-A4B0-09730948653C/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Birth of Vinayaka" url="https://image-resizer-cloud-api.akamaized.net/image/491B19A1-B08F-4A7D-8D7B-FCB4DD3A04E5/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="The Moon's Curse" url="https://image-resizer-cloud-api.akamaized.net/image/E951A125-2904-4941-BD5F-06DC45148C6E/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Boy with The Peacock" url="https://image-resizer-cloud-api.akamaized.net/image/084179ED-BCCB-4B7B-85B1-9A4660199E67/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Krishna and Jambavath" url="https://image-resizer-cloud-api.akamaized.net/image/47B96DB9-00A3-4A20-9DA1-446315D4AF94/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Race of the Three Worlds" url="https://image-resizer-cloud-api.akamaized.net/image/49D86AA6-08BE-4554-A954-1FBFB96FBA41/0-2x3.jpg?width=225"></Seeallcards>
        </div>
    </X>
    </>
  )
}
