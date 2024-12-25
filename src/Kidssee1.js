import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Kidssee1() {
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
      <h2> <button className='btn1'><NavLink to="/Kids" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Newly added</h2>
    <div className='main'>
        <Seeallcards name="Bala Bharatham" url="https://image-resizer-cloud-api.akamaized.net/image/53EE8CB1-E3B2-4C62-82F3-EC0C677F6639/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Christmas Thatha" url="https://image-resizer-cloud-api.akamaized.net/image/E1393AA6-177A-419F-80D6-0B40F698AC90/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Bal Hanuman2" url="https://image-resizer-cloud-api.akamaized.net/image/11975FAE-738D-4EBE-B4F2-48BB7A4EC758/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Ghatotkacha" url="https://image-resizer-cloud-api.akamaized.net/image/4C0B57CA-811D-4D8E-B8E9-2ABA8214CBE7/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Prahlad" url="https://image-resizer-cloud-api.akamaized.net/image/88E06F5B-9ED1-4DB6-A5FC-0E111A40E6B2/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Ravan Mahayodha" url="https://image-resizer-cloud-api.akamaized.net/image/C6A8C26F-85E8-4847-8792-2DC69722177F/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Super K" url="https://image-resizer-cloud-api.akamaized.net/image/F3B725AA-EFC1-4E38-A52B-CEE0234E2910/0-2x3.jpg?width=225"></Seeallcards>
        </div>
    </X>
    </>
  )
}
