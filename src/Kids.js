import React from 'react';
import Cards from './Cards';
import styled from 'styled-components';
import Slidekids from './Slidekids';
import { NavLink } from 'react-router-dom';
export default function Kids() {
  const X=styled.header`
  .main{
     display:flex;
     flex-direction:row;
     background-color:rgb(29, 30, 32);
     overflow-x:scroll;
  }
  .main::-webkit-scrollbar {
    display: none;
}

h1{
  color:white;
  font-family:calibri;
  font-weight:150;
  padding-right:1250px;
}
.button1{
  display:flex;
  flex-direction:row;
  background-color:rgb(29, 30, 32);
 }
button{
  margin-top:30px;
  width:100px;
  height:30px;
  background-color:rgb(29, 30, 32);
  color:white;
  font-family:calibri;
  font-weight:150;
  font-size:20px;
  border-color:rgb(29, 30, 32);
}
.button2{
  width:90px;
  background-color:rgb(29, 30, 32);
  border:none;
}
.Nav_List{
  text-decoration:none;
  text-transform:lower-case;
  font-size:20px;
  color:white;
}
  
  `;
    return(
      <>
      <Slidekids/>
      <X>
      <div className='button1'>
      <h1>Newly Added</h1>
      <button className='button2'><NavLink to="/Kidssee1" className="Nav_List">See all</NavLink></button>
      </div>
      <div className='main'>
        <Cards name="Bala Bharatham" url="https://image-resizer-cloud-api.akamaized.net/image/53EE8CB1-E3B2-4C62-82F3-EC0C677F6639/0-2x3.jpg?width=225"></Cards>
        <Cards name="Christmas Thatha" url="https://image-resizer-cloud-api.akamaized.net/image/E1393AA6-177A-419F-80D6-0B40F698AC90/0-2x3.jpg?width=225"></Cards>
        <Cards name="Bal Hanuman2" url="https://image-resizer-cloud-api.akamaized.net/image/11975FAE-738D-4EBE-B4F2-48BB7A4EC758/0-2x3.jpg?width=225"></Cards>
        <Cards name="Ghatotkacha" url="https://image-resizer-cloud-api.akamaized.net/image/4C0B57CA-811D-4D8E-B8E9-2ABA8214CBE7/0-2x3.jpg?width=225"></Cards>
        <Cards name="Prahlad" url="https://image-resizer-cloud-api.akamaized.net/image/88E06F5B-9ED1-4DB6-A5FC-0E111A40E6B2/0-2x3.jpg?width=225"></Cards>
        <Cards name="Ravan Mahayodha" url="https://image-resizer-cloud-api.akamaized.net/image/C6A8C26F-85E8-4847-8792-2DC69722177F/0-2x3.jpg?width=225"></Cards>
        <Cards name="Super K" url="https://image-resizer-cloud-api.akamaized.net/image/F3B725AA-EFC1-4E38-A52B-CEE0234E2910/0-2x3.jpg?width=225"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Magical World</h1>
      <button className='button2'><NavLink to="/Kidssee2" className="Nav_List">See all</NavLink></button>
      </div>
      <div className='main'>
        <Cards name="Magical Tiffin" url="https://image-resizer-cloud-api.akamaized.net/image/7A693396-AD04-4B54-87A5-EB53594592CF/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Ficus Tree" url="https://image-resizer-cloud-api.akamaized.net/image/92D5CB84-64E5-40DF-89B5-CBB341647200/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Stick" url="https://image-resizer-cloud-api.akamaized.net/image/63E56402-8883-449F-A51E-5DD824571AE8/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Flower" url="https://image-resizer-cloud-api.akamaized.net/image/A80D4968-7B4B-4FD0-8B23-39F4A933EE72/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Book" url="https://image-resizer-cloud-api.akamaized.net/image/B6218B43-9340-452B-BF2E-E153E73ED9E9/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Seeds" url="https://image-resizer-cloud-api.akamaized.net/image/1CC6A951-3BE7-488A-B54B-D51151757FDF/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Shoes" url="https://image-resizer-cloud-api.akamaized.net/image/F78109B0-A939-4DC0-A03B-9D41E9B23373/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Brush" url="https://image-resizer-cloud-api.akamaized.net/image/93DC0F00-616F-4097-893E-414683D58735/0-2x3.jpg?width=225"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Moral Stories</h1>
      <button className='button2'><NavLink to="/Kidssee3" className="Nav_List">See all</NavLink></button>
      </div>
      <div className='main'>
        <Cards name="Fire Fish" url="https://image-resizer-cloud-api.akamaized.net/image/89C04D6F-28D5-4DA2-AFC3-B70DC2A81B0C/0-2x3.jpg?width=225"></Cards>
        <Cards name="Collector Kodalu" url="https://image-resizer-cloud-api.akamaized.net/image/5EBD176D-7AE1-4829-8BE6-1CD409EBFA32/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Bell" url="https://image-resizer-cloud-api.akamaized.net/image/8A20EB02-49C0-4AAB-899C-EC616925C081/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Lamp" url="https://image-resizer-cloud-api.akamaized.net/image/FCC38212-3998-4995-A158-3E0F67A9F016/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Mask" url="https://image-resizer-cloud-api.akamaized.net/image/8157D33B-38A7-4D4B-977D-AFD160AC4AE4/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Ox" url="https://image-resizer-cloud-api.akamaized.net/image/5EBC8CFA-9C4A-4D9E-9180-2D1928A546F3/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magician Of Mice" url="https://image-resizer-cloud-api.akamaized.net/image/9F4C0E54-9577-4262-A060-23881E0F9931/0-2x3.jpg?width=225"></Cards>
        <Cards name="Magical Mirror" url="https://image-resizer-cloud-api.akamaized.net/image/0807C7A0-703B-4758-8418-039C86FD287C/0-2x3.jpg?width=225"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Maha Ganesha</h1>
      <button className='button2'><NavLink to="/Kidssee4" className="Nav_List">See all</NavLink></button>
      </div>
      <div className='main'>
        <Cards name="Gajasuras Penance" url="https://image-resizer-cloud-api.akamaized.net/image/54D13CDB-47BD-4F5E-8CF3-DDCFE9437319/0-2x3.jpg?width=225"></Cards>
        <Cards name="Vishnu Promise" url="https://image-resizer-cloud-api.akamaized.net/image/B35722BC-1EBF-4EE2-A4B0-09730948653C/0-2x3.jpg?width=225"></Cards>
        <Cards name="Birth of Vinayaka" url="https://image-resizer-cloud-api.akamaized.net/image/491B19A1-B08F-4A7D-8D7B-FCB4DD3A04E5/0-2x3.jpg?width=225"></Cards>
        <Cards name="The Moon's Curse" url="https://image-resizer-cloud-api.akamaized.net/image/E951A125-2904-4941-BD5F-06DC45148C6E/0-2x3.jpg?width=225"></Cards>
        <Cards name="Boy with The Peacock" url="https://image-resizer-cloud-api.akamaized.net/image/084179ED-BCCB-4B7B-85B1-9A4660199E67/0-2x3.jpg?width=225"></Cards>
        <Cards name="Krishna and Jambavath" url="https://image-resizer-cloud-api.akamaized.net/image/47B96DB9-00A3-4A20-9DA1-446315D4AF94/0-2x3.jpg?width=225"></Cards>
        <Cards name="Race of the Three Worlds" url="https://image-resizer-cloud-api.akamaized.net/image/49D86AA6-08BE-4554-A954-1FBFB96FBA41/0-2x3.jpg?width=225"></Cards>
        </div>
      </X>
      </>
    );
}

