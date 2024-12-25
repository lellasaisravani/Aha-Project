import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Kidssee3() {
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
      <h2> <button className='btn1'><NavLink to="/Kids" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Moral Stories</h2>
    <div className='main'>
        <Seeallcards name="Fire Fish" url="https://image-resizer-cloud-api.akamaized.net/image/89C04D6F-28D5-4DA2-AFC3-B70DC2A81B0C/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Collector Kodalu" url="https://image-resizer-cloud-api.akamaized.net/image/5EBD176D-7AE1-4829-8BE6-1CD409EBFA32/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Bell" url="https://image-resizer-cloud-api.akamaized.net/image/8A20EB02-49C0-4AAB-899C-EC616925C081/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Lamp" url="https://image-resizer-cloud-api.akamaized.net/image/FCC38212-3998-4995-A158-3E0F67A9F016/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Mask" url="https://image-resizer-cloud-api.akamaized.net/image/8157D33B-38A7-4D4B-977D-AFD160AC4AE4/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Ox" url="https://image-resizer-cloud-api.akamaized.net/image/5EBC8CFA-9C4A-4D9E-9180-2D1928A546F3/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magician Of Mice" url="https://image-resizer-cloud-api.akamaized.net/image/9F4C0E54-9577-4262-A060-23881E0F9931/0-2x3.jpg?width=225"></Seeallcards>
        <Seeallcards name="Magical Mirror" url="https://image-resizer-cloud-api.akamaized.net/image/0807C7A0-703B-4758-8418-039C86FD287C/0-2x3.jpg?width=225"></Seeallcards>
        </div>
    </X>
    </>
  )
}
