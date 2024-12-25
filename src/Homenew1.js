import React from 'react';
import Newpagecards from './Newpagecards';
import styled from "styled-components";

export default function Homenew1() {
  const X=styled.header`
  .div{
    background: url(https://image-resizer-cloud-api.akamaized.net/image/3ED2F48E-3E78-4AD7-A498-622ED4E53AA9/0-3x1.jpg?width=2304) no-repeat center center;   
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  `;
  return (
    <>
      <X>
      <div className='div'>
      <Newpagecards btn1="Premium" movie="Kalyanam Kamaneeyam" para1="2023 • 1hr 44min • Romance Comedy
Romantic • Humorous" para2="As a college relationship blossoms into marriage, Shiva's incessant job hunt goes unnoticed by Shruthi,
causing problems for the couple. Their struggle to overcome the differences forms the crux of the story."
      ></Newpagecards>
    </div>
    </X>
    </>
  )
}
