import React from 'react';
import Seeallcards from './Seeallcards';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export default function Homesee4() {
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
      <h2> <button className='btn1'><NavLink to="/" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>K-Drama</h2>
    <div className='main'>
        <Seeallcards name="Couple onthe Backtrack" url="https://image-resizer-cloud-api.akamaized.net/image/001555FB-4187-41D1-AE05-F94F61FB53B9/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep1:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/3AFB45EA-A6EB-47BF-9FAA-19AF8EDB2564/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep2:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/2B1FF8F9-5E09-4C0C-A772-3711ED61DE8B/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep3:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/4F0FF3ED-4B5B-481A-B583-049AB693FB44/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep4:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/CF070900-BB60-4577-A751-9700B92D6456/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep5:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/4CA3FD34-FBFD-402F-A46F-A479DA8ACA12/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Hwarang" url="https://image-resizer-cloud-api.akamaized.net/image/FDADD34C-97EB-4B06-AB83-2867E5C6418F/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep1:Hwarang" url="https://image-resizer-cloud-api.akamaized.net/image/2EB5C9FB-C7A8-4B1F-938E-9A360046E87A/0-2x3.jpg?width=240"></Seeallcards>
        <Seeallcards name="Ep2:Hwarang" url="https://image-resizer-cloud-api.akamaized.net/image/FB93A498-B739-40D2-B20D-54F291CC1312/0-2x3.jpg?width=240"></Seeallcards>
        </div>
    </X>
    </>
  )
}
