import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Homesee2() {
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
      <h2> <button className='btn1'><NavLink to="/" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Daily Series</h2>
    <div className='main'>
       <Seeallcards name="Ep 52:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/E887EC5D-96B5-4CA3-8C97-717E9A933455/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 51:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/0425C1A7-FDB3-4388-9AE5-7C4C9E1F2145/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 50:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/C73CB704-AC69-4701-8741-06974F124D02/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 49:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/BF9BD760-B5BB-4573-960B-AF047EA23F31/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 48:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/B63C443C-87E9-4C38-B28A-8684D96766D7/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 47:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/2FD30775-981D-45D8-9C15-C181AB155F8B/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 46:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/0E2198A4-4209-4FDA-85CD-03680C37CC50/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep 45:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/382500F9-5CFC-4EDA-BED5-E24CF64A6BB5/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
