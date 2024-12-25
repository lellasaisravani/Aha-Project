import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Moviesee1() {
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
      <h2> <button className='btn1'><NavLink to="/Movies" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>Trending</h2>
    <div className='main'>
        <Seeallcards name="18 Pages" url="https://image-resizer-cloud-api.akamaized.net/image/2006C576-B34E-4544-8C54-8C89B8740416/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Driver Jamuna" url="https://image-resizer-cloud-api.akamaized.net/image/D63B73BE-8810-49B0-A78F-A2E579E96306/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Masooda" url="https://image-resizer-cloud-api.akamaized.net/image/C6D49DC4-C4D5-495B-86C5-AA6EC41CE315/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Sardar" url="https://image-resizer-cloud-api.akamaized.net/image/9D765C6E-DCB6-4D3F-BF5B-8F7FCEEB65CE/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ori Devuda" url="https://image-resizer-cloud-api.akamaized.net/image/6984D667-EC02-43FE-8592-D173A6DEB7E8/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Swathi Muthyam" url="https://image-resizer-cloud-api.akamaized.net/image/256D2180-CB22-473A-BC33-41BA0A57EB62/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Alluri" url="https://image-resizer-cloud-api.akamaized.net/image/F1ED6BFB-7FC6-42AA-89A0-2504F9B62910/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Malik" url="https://image-resizer-cloud-api.akamaized.net/image/23F90041-A0B1-4DEB-AA78-D2CB0716DBDE/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
