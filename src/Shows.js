import React from 'react';
import Cards from './Cards';
import styled from 'styled-components';
import Slideshows from './Slideshows';
import { NavLink } from 'react-router-dom';
export default function Shows() {
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
  margin-left:5px;
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
      <Slideshows/>
      <X>
      <div className='button1'>
      <h1>Unstoppable2</h1>
      <button className='button2'><NavLink to="/Showsee1" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Power Finale" url="https://image-resizer-cloud-api.akamaized.net/image/5957573E-6CA4-44AE-8906-EA5ACC2E155A/0-2x3.jpg?width=240"></Cards>
        <Cards name="Power Finale" url="https://image-resizer-cloud-api.akamaized.net/image/92DCA020-308D-41A8-A980-5014025062E0/0-2x3.jpg?width=240"></Cards>
        <Cards name="Unstoppable Ep8" url="https://image-resizer-cloud-api.akamaized.net/image/F5843A66-853D-46F2-BA4D-690464B653F8/0-2x3.jpg?width=240"></Cards>
        <Cards name="Bahubali Ep2" url="https://image-resizer-cloud-api.akamaized.net/image/4D314A9F-A84F-4AFA-986A-EEFAACD370C6/0-2x3.jpg?width=240"></Cards>
        <Cards name="Bahubali Ep1" url="https://image-resizer-cloud-api.akamaized.net/image/0E441AF9-EB39-4A16-B48B-61464EB72E97/0-2x3.jpg?width=240"></Cards>
        <Cards name="Unstoppable Ep6" url="https://image-resizer-cloud-api.akamaized.net/image/B99C8C69-FB70-4C17-B17A-DEEE5C0FF82E/0-2x3.jpg?width=240"></Cards>
        <Cards name="Unstoppable Ep5" url="https://image-resizer-cloud-api.akamaized.net/image/4A04CD85-8FD6-4E15-A9F4-740F75B8967F/0-2x3.jpg?width=240"></Cards>
        <Cards name="Unstoppable Ep4" url="https://image-resizer-cloud-api.akamaized.net/image/BF9B7EFB-1336-457A-AAEB-23C3C5E76E3B/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Dance Ikon</h1>
      <button className='button2'><NavLink to="/Showsee2" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Grand finale" url="https://image-resizer-cloud-api.akamaized.net/image/FB8233ED-032D-4023-AAD4-0D8BF091720E/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 1" url="https://image-resizer-cloud-api.akamaized.net/image/3326271F-E20A-40EF-8BB0-EE4DD81B2E7D/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 2" url="https://image-resizer-cloud-api.akamaized.net/image/28DC6DA6-C0CD-4565-8282-375708C86318/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 3" url="https://image-resizer-cloud-api.akamaized.net/image/2BBD7C1B-ADFE-46A2-95DA-89F360419BB1/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 4" url="https://image-resizer-cloud-api.akamaized.net/image/C66290FA-ED61-436D-84A2-7311CE8581D2/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 5" url="https://image-resizer-cloud-api.akamaized.net/image/FE07B033-1851-437C-845E-E595E7CFB1C5/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 6" url="https://image-resizer-cloud-api.akamaized.net/image/7939C7FC-BA00-4740-9086-324171CF9C2E/0-2x3.jpg?width=240"></Cards>
        <Cards name="Episode 7" url="https://image-resizer-cloud-api.akamaized.net/image/B4F342BB-C897-4B29-B7BE-E1732B0586CA/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Aha Original</h1>
      <button className='button2'><NavLink to="/Showsee3" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Agent Anand Santosh" url="https://image-resizer-cloud-api.akamaized.net/image/B890CBBD-4869-4D11-8740-AFD01DF72377/0-2x3.jpg?width=240"></Cards>
        <Cards name="3 Roses" url="https://image-resizer-cloud-api.akamaized.net/image/1D67B609-AC68-4A94-B80E-D0B8437B5519/0-2x3.jpg?width=225"></Cards>
        <Cards name="Kudi Yedamaithe" url="https://image-resizer-cloud-api.akamaized.net/image/85D56847-BEB7-4C31-8F03-72FB55EE3FA6/0-2x3.jpg?width=225"></Cards>
        <Cards name="Locked" url="https://image-resizer-cloud-api.akamaized.net/image/AB4E98DA-CAA5-48C0-81A8-DB20084EE026/0-2x3.jpg?width=225"></Cards>
        <Cards name="11th Hour" url="https://image-resizer-cloud-api.akamaized.net/image/CF86398B-F897-4DEA-B067-2AEC473A7309/0-2x3.jpg?width=225"></Cards>
        <Cards name="Anya's Tutorial" url="https://image-resizer-cloud-api.akamaized.net/image/ECE0631E-D9E1-45ED-8631-C803D2E80424/0-2x3.jpg?width=225"></Cards>
        <Cards name="#BFF" url="https://image-resizer-cloud-api.akamaized.net/image/F1AFA21D-A62C-4950-B303-FC7242559971/0-2x3.jpg?width=225"></Cards>
        <Cards name="Alludu Gaaru" url="https://image-resizer-cloud-api.akamaized.net/image/0AA73A1E-4E26-45C5-9891-FBA787699AD4/0-2x3.jpg?width=225"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Locked</h1>
      <button className='button2'><NavLink to="/Showsee4" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="The Loot of a Lifetime" url="https://image-resizer-cloud-api.akamaized.net/image/71768753-DEDB-4B68-8DEB-EEC4C8425C03/0-2x3.jpg?width=225"></Cards>
        <Cards name="Hired guns" url="https://image-resizer-cloud-api.akamaized.net/image/E5D34C34-E0F5-4411-8789-14C6C3AE5EB6/0-2x3.jpg?width=225"></Cards>
        <Cards name="Parched" url="https://image-resizer-cloud-api.akamaized.net/image/B4338205-C966-4AF3-A37C-95E848247EBC/0-2x3.jpg?width=225"></Cards>
        <Cards name="Euphoric Mind" url="https://image-resizer-cloud-api.akamaized.net/image/08D68BCE-49D2-49AD-AB86-5C3CDD086384/0-2x3.jpg?width=225"></Cards>
        <Cards name="The Demons Calling" url="https://image-resizer-cloud-api.akamaized.net/image/45C7E020-A7D7-4689-93E6-A786BF7CFC3A/0-2x3.jpg?width=225"></Cards>
        <Cards name="A Mare's Nest" url="https://image-resizer-cloud-api.akamaized.net/image/70288CB9-018B-4A0C-8E91-438529F82296/0-2x3.jpg?width=225"></Cards>
        <Cards name="Tabula Rasa" url="https://image-resizer-cloud-api.akamaized.net/image/3F4843C5-6429-430A-9095-8EF04E70EEFB/0-2x3.jpg?width=225"></Cards>
        </div>
      </X>
      </>
    );
}

