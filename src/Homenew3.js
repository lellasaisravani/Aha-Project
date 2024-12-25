import React from 'react';
import Newpagecards from './Newpagecards';
import styled from "styled-components";

export default function Homenew3() {
  const X=styled.header`
  .div{
    background: url(https://image-resizer-cloud-api.akamaized.net/image/0D1D494F-5E9D-4419-AC3D-193CD11265A1/0-3x1.jpg?width=2304) no-repeat center center;   
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  `;
  return (
    <>
      <X>
      <div className='div'>
      <Newpagecards btn1="Free" movie="Mister Pellam" para1="2022 • 1 Season • Drama
Feel-good • Emotional" para2="Mr. Pellam is a hilarious love Story about Adhitya, Bhavya and Sandhya entwining them in a love triangle. Will Adhitya be able to choose love over money?"
      ></Newpagecards>
    </div>
    </X>
    </>
  )
}
