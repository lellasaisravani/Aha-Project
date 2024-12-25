import React from 'react';
import Cards from './Cards';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Slidehome from './Slidehome';

export default function Home() {
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
    width:100%;
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
      <Slidehome/>
      <X>
        <div className='button1'>
      <h1>New Releases</h1>
      <button className='button2'><NavLink to="/Homesee1" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <NavLink to="/Homenew2" className="Nav_List"><Cards name="Micheal" url="https://image-resizer-cloud-api.akamaized.net/image/E1FBF386-AB73-41CB-AFC8-77879FBDE6C4/0-2x3.jpg?width=240"></Cards></NavLink>
        <NavLink to="/Homenew1" className="Nav_List"><Cards name="Kalyanam Kamaneeyam" url="https://image-resizer-cloud-api.akamaized.net/image/3ED2F48E-3E78-4AD7-A498-622ED4E53AA9/0-2x3.jpg?width=240"></Cards></NavLink>
        <NavLink to="/Homenew3" className="Nav_List"><Cards name="Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/0D1D494F-5E9D-4419-AC3D-193CD11265A1/0-2x3.jpg?width=240"></Cards></NavLink>
        <Cards name="Hunt" url="https://image-resizer-cloud-api.akamaized.net/image/D640207C-36E0-4BDB-BDC8-12B1EA8E208A/0-2x3.jpg?width=240"></Cards>
        <Cards name="Missing" url="https://image-resizer-cloud-api.akamaized.net/image/8D25B899-B826-4A1B-84ED-962B0C076E9E/0-2x3.jpg?width=240"></Cards>
        <Cards name="Mata Raani Mounamidhi" url="https://image-resizer-cloud-api.akamaized.net/image/2157A707-0212-4A97-96B9-4F9D16F66AB4/0-2x3.jpg?width=240"></Cards>
        <Cards name="18 Pages" url="https://image-resizer-cloud-api.akamaized.net/image/2006C576-B34E-4544-8C54-8C89B8740416/0-2x3.jpg?width=240"></Cards>
        <Cards name="Gaalodu" url="https://image-resizer-cloud-api.akamaized.net/image/CBD9AA66-4399-46EB-BAEC-2BEB17420372/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Daily Series</h1>
      <button className='button2'><NavLink to="/Homesee2" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Ep 52:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/E887EC5D-96B5-4CA3-8C97-717E9A933455/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 51:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/0425C1A7-FDB3-4388-9AE5-7C4C9E1F2145/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 50:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/C73CB704-AC69-4701-8741-06974F124D02/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 49:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/BF9BD760-B5BB-4573-960B-AF047EA23F31/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 48:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/B63C443C-87E9-4C38-B28A-8684D96766D7/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 47:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/2FD30775-981D-45D8-9C15-C181AB155F8B/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 46:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/0E2198A4-4209-4FDA-85CD-03680C37CC50/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep 45:Mister Pellam" url="https://image-resizer-cloud-api.akamaized.net/image/382500F9-5CFC-4EDA-BED5-E24CF64A6BB5/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Recently Added</h1>
      <button className='button2'><NavLink to="/Homesee3" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Parugu" url="https://image-resizer-cloud-api.akamaized.net/image/403D1EDD-AD4F-49A6-9944-334B3CCD8F4E/0-2x3.jpg?width=240"></Cards>
        <Cards name="Memu" url="https://image-resizer-cloud-api.akamaized.net/image/82A70C48-49A9-421A-BB67-87605600FCEB/0-2x3.jpg?width=240"></Cards>
        <Cards name="Geethanjali" url="https://image-resizer-cloud-api.akamaized.net/image/225FF675-97AA-4297-98A6-A240AF5900B4/0-2x3.jpg?width=240"></Cards>
        <Cards name="Lovely" url="https://image-resizer-cloud-api.akamaized.net/image/AE587FAA-F596-4750-8635-915F1D543E55/0-2x3.jpg?width=240"></Cards>
        <Cards name="Current Theega" url="https://image-resizer-cloud-api.akamaized.net/image/A000639B-97B6-4C11-A4E9-AB1C18853BCD/0-2x3.jpg?width=240"></Cards>
        <Cards name="Jhansi" url="https://image-resizer-cloud-api.akamaized.net/image/DA2FDB7E-6372-4585-8391-7E25BC3DF3D6/0-2x3.jpg?width=240"></Cards>
        <Cards name="Dhoni" url="https://image-resizer-cloud-api.akamaized.net/image/5EA3EEBC-DD5E-4BB7-8A41-C865B8B7A804/0-2x3.jpg?width=240"></Cards>
        <Cards name="Bhadram" url="https://image-resizer-cloud-api.akamaized.net/image/215D5738-D0A3-490E-B02A-AC388A131A69/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>K-Drama</h1>
      <button className='button2'><NavLink to="/Homesee4" className="Nav_List">See all</NavLink></button>
      </div>
        <div className='main'>
        <Cards name="Couple onthe Backtrack" url="https://image-resizer-cloud-api.akamaized.net/image/001555FB-4187-41D1-AE05-F94F61FB53B9/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep1:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/3AFB45EA-A6EB-47BF-9FAA-19AF8EDB2564/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep2:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/2B1FF8F9-5E09-4C0C-A772-3711ED61DE8B/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep3:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/4F0FF3ED-4B5B-481A-B583-049AB693FB44/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep4:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/CF070900-BB60-4577-A751-9700B92D6456/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep5:COTB" url="https://image-resizer-cloud-api.akamaized.net/image/4CA3FD34-FBFD-402F-A46F-A479DA8ACA12/0-2x3.jpg?width=240"></Cards>
        <Cards name="Hwarang" url="https://image-resizer-cloud-api.akamaized.net/image/FDADD34C-97EB-4B06-AB83-2867E5C6418F/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep1:Hwarang" url="https://image-resizer-cloud-api.akamaized.net/image/2EB5C9FB-C7A8-4B1F-938E-9A360046E87A/0-2x3.jpg?width=240"></Cards>
        <Cards name="Ep2:Hwarang" url="https://image-resizer-cloud-api.akamaized.net/image/FB93A498-B739-40D2-B20D-54F291CC1312/0-2x3.jpg?width=240"></Cards>
        </div>
      </X>
      <X>
      <div className='button1'>
      <h1>Actors(A-Z)</h1>
      </div>
        <div className='main'>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/8995C63C-D9F9-4D0D-91E3-5432765F028A/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/498B3460-145A-4088-A656-3F9D44B4FD91/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/1C4B91AA-EC73-4BE4-B296-22418E101B71/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/1404BDD0-2E86-4C65-A999-9F36A5DFC2AE/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/1580D135-FF22-45C1-B3C8-65CED50EA27F/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/38F96932-7222-4F30-95ED-C187CD2B7DCF/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/C0C4B2F0-DB30-478C-87DE-280121FD5C82/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/234B14EE-540C-4E6B-8EB4-2491528DFD98/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/C7E49D49-D2E8-498D-B519-AFBA7CB588F8/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/8EE186ED-B68A-470F-BAA6-F376B106DACC/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/AAC925F0-C817-4641-8581-F9C2B07D9A8D/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/F40A476C-3C4E-43AF-AE1F-EFA012DA9F0D/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/3CFDC449-C0CB-4B46-91B4-ECC1F6EA9812/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/0791757D-817B-4B2C-8B1F-F2C14A786948/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/71297C70-1A6B-44B0-9018-420A4ED7AE1B/3-1x1.jpg?width=195"></Cards>
        <Cards  url="https://image-resizer-cloud-api.akamaized.net/image/18ED9E71-6072-40AE-A099-FAE8163DA96A/3-1x1.jpg?width=195"></Cards>
        </div>
      </X>
      </>
    );
}

