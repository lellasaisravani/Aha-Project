import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Moviesee4() {
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
      <h2> <button className='btn1'><NavLink to="/Movies" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>2021 Top Movies</h2>
    <div className='main'>
        <Seeallcards name="colour Photo" url="https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Naandhi" url="https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Zombie Reddy" url="https://image-resizer-cloud-api.akamaized.net/image/73830D38-C02F-4B96-9E67-EA5034FA7432/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Play Back" url="https://image-resizer-cloud-api.akamaized.net/image/99C5D943-0626-4355-A6E2-82D4180AFA4E/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Midnight Murders" url="https://image-resizer-cloud-api.akamaized.net/image/3E0B0FE2-B352-4B02-8EE8-D82202C3C345/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Gaali Sampath" url="https://image-resizer-cloud-api.akamaized.net/image/C650F0C2-5E20-40F6-8D92-9F01EC1BEF49/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Vijay Sethupathi" url="https://image-resizer-cloud-api.akamaized.net/image/79DA58E8-BE01-4A19-87AC-CC5CC41BC4C8/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Mail Movie" url="https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
