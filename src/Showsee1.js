import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Showsee1() {
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
      <h2> <button className='btn1'><NavLink to="/Shows" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Unstoppable2</h2>
    <div className='main'>
        <Seeallcards name="Power Finale" url="https://image-resizer-cloud-api.akamaized.net/image/5957573E-6CA4-44AE-8906-EA5ACC2E155A/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Power Finale" url="https://image-resizer-cloud-api.akamaized.net/image/92DCA020-308D-41A8-A980-5014025062E0/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Unstoppable Ep8" url="https://image-resizer-cloud-api.akamaized.net/image/F5843A66-853D-46F2-BA4D-690464B653F8/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Bahubali Ep2" url="https://image-resizer-cloud-api.akamaized.net/image/4D314A9F-A84F-4AFA-986A-EEFAACD370C6/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Bahubali Ep1" url="https://image-resizer-cloud-api.akamaized.net/image/0E441AF9-EB39-4A16-B48B-61464EB72E97/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Unstoppable Ep6" url="https://image-resizer-cloud-api.akamaized.net/image/B99C8C69-FB70-4C17-B17A-DEEE5C0FF82E/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Unstoppable Ep5" url="https://image-resizer-cloud-api.akamaized.net/image/4A04CD85-8FD6-4E15-A9F4-740F75B8967F/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Unstoppable Ep4" url="https://image-resizer-cloud-api.akamaized.net/image/BF9B7EFB-1336-457A-AAEB-23C3C5E76E3B/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
