import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Homesee1() {
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
      <h2> <button className='btn1'><NavLink to="/" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button> New Releases</h2>
    <div className='main'>
        <Seeallcards name="Micheal" url="https://image-resizer-cloud-api.akamaized.net/image/E1FBF386-AB73-41CB-AFC8-77879FBDE6C4/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Kalyanam Kamaneeyam" url="https://image-resizer-cloud-api.akamaized.net/image/3ED2F48E-3E78-4AD7-A498-622ED4E53AA9/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/0D1D494F-5E9D-4419-AC3D-193CD11265A1/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Hunt" url="https://image-resizer-cloud-api.akamaized.net/image/D640207C-36E0-4BDB-BDC8-12B1EA8E208A/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Missing" url="https://image-resizer-cloud-api.akamaized.net/image/8D25B899-B826-4A1B-84ED-962B0C076E9E/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Mata Raani Mounamidhi" url="https://image-resizer-cloud-api.akamaized.net/image/2157A707-0212-4A97-96B9-4F9D16F66AB4/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="18 Pages" url="https://image-resizer-cloud-api.akamaized.net/image/2006C576-B34E-4544-8C54-8C89B8740416/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Gaalodu" url="https://image-resizer-cloud-api.akamaized.net/image/CBD9AA66-4399-46EB-BAEC-2BEB17420372/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
