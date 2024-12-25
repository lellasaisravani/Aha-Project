import React from 'react';
import Cards from './Cards';
import styled from 'styled-components';
import Slidemovies from './Slidemovies';
import { NavLink } from 'react-router-dom';
export default function Movies() {
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
      <Slidemovies/>
      <X>
      <div className='button1'>
      <h1>Trending</h1>
      <button className='button2'><NavLink to="/Moviesee1" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="18 Pages" url="https://image-resizer-cloud-api.akamaized.net/image/2006C576-B34E-4544-8C54-8C89B8740416/0-2x3.jpg?width=240"></Cards>
        <Cards name="Driver Jamuna" url="https://image-resizer-cloud-api.akamaized.net/image/D63B73BE-8810-49B0-A78F-A2E579E96306/0-2x3.jpg?width=240"></Cards>
        <Cards name="Masooda" url="https://image-resizer-cloud-api.akamaized.net/image/C6D49DC4-C4D5-495B-86C5-AA6EC41CE315/0-2x3.jpg?width=240"></Cards>
        <Cards name="Sardar" url="https://image-resizer-cloud-api.akamaized.net/image/9D765C6E-DCB6-4D3F-BF5B-8F7FCEEB65CE/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ori Devuda" url="https://image-resizer-cloud-api.akamaized.net/image/6984D667-EC02-43FE-8592-D173A6DEB7E8/0-2x3.jpg?width=240"></Cards>
        <Cards name="Swathi Muthyam" url="https://image-resizer-cloud-api.akamaized.net/image/256D2180-CB22-473A-BC33-41BA0A57EB62/0-2x3.jpg?width=240"></Cards>
        <Cards name="Alluri" url="https://image-resizer-cloud-api.akamaized.net/image/F1ED6BFB-7FC6-42AA-89A0-2504F9B62910/0-2x3.jpg?width=240"></Cards>
        <Cards name="Malik" url="https://image-resizer-cloud-api.akamaized.net/image/23F90041-A0B1-4DEB-AA78-D2CB0716DBDE/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>aha Original</h1>
      <button className='button2'><NavLink to="/Moviesee2" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Bhamakalapam" url="https://image-resizer-cloud-api.akamaized.net/image/72DD3211-3D3E-4911-92E6-48132F335F5A/0-2x3.jpg?width=240"></Cards>
        <Cards name="The American Dream" url="https://image-resizer-cloud-api.akamaized.net/image/AE9D806A-5950-4F13-8FAD-1CFF2AD7DABF/0-2x3.jpg?width=240"></Cards>
        <Cards name="Senapathi" url="https://image-resizer-cloud-api.akamaized.net/image/4BAD80A8-8D00-4010-B9E3-02F257B86B74/0-2x3.jpg?width=240"></Cards>
        <Cards name="Mail Movie" url="https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=240"></Cards>
        <Cards name="Super Over" url="https://image-resizer-cloud-api.akamaized.net/image/FE88FDDA-88F4-4BC1-9FF7-57C091AEABA4/0-2x3.jpg?width=240"></Cards>
        <Cards name="Colour Photo" url="https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=240"></Cards>
        <Cards name="Run Movie" url="https://image-resizer-cloud-api.akamaized.net/image/08569A17-6634-4EFD-867C-C6B84A100AEB/0-2x3.jpg?width=240"></Cards>
        <Cards name="Metro Kathalu" url="https://image-resizer-cloud-api.akamaized.net/image/D39A72E5-274A-4FC1-918E-5F71BE54C662/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>New Releases</h1>
      <button className='button2'><NavLink to="/Moviesee3" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Hunt" url="https://image-resizer-cloud-api.akamaized.net/image/D640207C-36E0-4BDB-BDC8-12B1EA8E208A/0-2x3.jpg?width=240"></Cards>
        <Cards name="Mukhachitram" url="https://image-resizer-cloud-api.akamaized.net/image/2C078FFD-55B4-43EA-8B3C-9F7A66A5445F/0-2x3.jpg?width=240"></Cards>
        <Cards name="Chittam Maharani" url="https://image-resizer-cloud-api.akamaized.net/image/3B5F0EF1-7D34-4ADB-B91F-42FADCAD9944/0-2x3.jpg?width=240"></Cards>
        <Cards name="Vallidari madhya" url="https://image-resizer-cloud-api.akamaized.net/image/F5A38384-B8C0-45F1-AB91-AB43A5CB6E86/0-2x3.jpg?width=240"></Cards>
        <Cards name="Crazy Fellow" url="https://image-resizer-cloud-api.akamaized.net/image/559DCAE9-B20E-4ECA-B281-B79E77EA7845/0-2x3.jpg?width=240"></Cards>
        <Cards name="Raani" url="https://image-resizer-cloud-api.akamaized.net/image/82A70C48-49A9-421A-BB67-87605600FCEB/0-2x3.jpg?width=240"></Cards>
        <Cards name="Geetha" url="https://image-resizer-cloud-api.akamaized.net/image/DE913B46-858E-457A-92B7-FC29D2B07C65/0-2x3.jpg?width=240"></Cards>
        <Cards name="Uniki" url="https://image-resizer-cloud-api.akamaized.net/image/0AA5B8ED-EC9B-453C-ACCB-DFEF68FB29E1/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>2021 Top Movies</h1>
      <button className='button2'><NavLink to="/Moviesee4" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="colour Photo" url="https://image-resizer-cloud-api.akamaized.net/image/5DB408A5-20C9-4CA7-B59C-0290AC809635/0-2x3.jpg?width=240"></Cards>
        <Cards name="Naandhi" url="https://image-resizer-cloud-api.akamaized.net/image/34171E31-9E91-4567-8E6F-F6B81B2A481D/0-2x3.jpg?width=240"></Cards>
        <Cards name="Zombie Reddy" url="https://image-resizer-cloud-api.akamaized.net/image/73830D38-C02F-4B96-9E67-EA5034FA7432/0-2x3.jpg?width=240"></Cards>
        <Cards name="Play Back" url="https://image-resizer-cloud-api.akamaized.net/image/99C5D943-0626-4355-A6E2-82D4180AFA4E/0-2x3.jpg?width=240"></Cards>
        <Cards name="Midnight Murders" url="https://image-resizer-cloud-api.akamaized.net/image/3E0B0FE2-B352-4B02-8EE8-D82202C3C345/0-2x3.jpg?width=240"></Cards>
        <Cards name="Gaali Sampath" url="https://image-resizer-cloud-api.akamaized.net/image/C650F0C2-5E20-40F6-8D92-9F01EC1BEF49/0-2x3.jpg?width=240"></Cards>
        <Cards name="Vijay Sethupathi" url="https://image-resizer-cloud-api.akamaized.net/image/79DA58E8-BE01-4A19-87AC-CC5CC41BC4C8/0-2x3.jpg?width=240"></Cards>
        <Cards name="Mail Movie" url="https://image-resizer-cloud-api.akamaized.net/image/543ABA39-F07B-4594-B2EB-0CDC025F5AC0/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      </>
    );
}

