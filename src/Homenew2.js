import React from 'react';
import Newpagecards from './Newpagecards';
import styled from "styled-components";

export default function Homenew2() {
  const X=styled.header`
  .div{
    background: url(https://image-resizer-cloud-api.akamaized.net/image/E1FBF386-AB73-41CB-AFC8-77879FBDE6C4/0-16x9.jpg?width=2295) no-repeat center center;   
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  `;
  return (
    <>
      <X>
      <div className='div'>
      <Newpagecards btn1="Premium" movie="Michael" para1="2023 • 2hr 32min • Action
Suspenseful • Adventurous" para2="Taking place in the early 1990s, Michael is set on the landscapes of Mumbai and Delhi, showcasing the
 life of a Gangster, whose life gets intertwined in the webs of Gangster world and love."
      ></Newpagecards>
    </div>
    </X>
    </>
  )
}
