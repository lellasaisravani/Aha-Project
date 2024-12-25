import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export default function Subscribe() {
    const Sub=styled.header`
    .main{
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        height:350px;
        width:100%;
        margin-top:2px;
    }
    .division{
        background-color:rgb(18, 19, 19);
        height:180px;
        width:300px;
        margin:85px;
        padding:20px;
        border-radius:30px;
    }
    h2{
        color:white;
    }
    p{
        color:white;
        font-size:12px;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif,
        monospace;
        font-weight:20;
    }
    .line{
        background-color:rgb(106, 105, 105);
        width:100%;
        height:0.5px;
        line-height: 60%;
    }
    .btn{
        display:flex;
        flex-direction:row;
    }
    h3{
        padding-right:80px;
        color:white;
    }
    button{
        height:40px;
        margin-top:10px;
        border-radius:20px;
        background-color:#F76E11;
        border:none;
        color:white;
    }
    .btn1{
        background-color:rgb(29, 30, 32);
        color:white;
        
      }
      img{
        height:30px;
        width:30px;
        margin-left:100px;
        margin-top:40px;
      }
    `;
  return (
    <>
    <Sub>
    <button className='btn1'><NavLink to="/" className="Nav_List"><img src="https://t4.ftcdn.net/jpg/02/79/73/83/240_F_279738335_z0uXeF62cdOmYSFcbNqOyKPDLuU5MHfB.jpg"/></NavLink></button>   
    <div className='main'>
      <div className='division'>
           <h2>Aha GOLD</h2>
           <p>Enjoy Telugu&Tamil Movies and Web series in <br/>4K Video and Dolby,with no Ads for 12 months</p>
           <div className='line'></div>
           <div className='btn'>
           <h3>INR 699/year</h3>
           <button>Subscribe</button>
           </div>
      </div>
      <div className='division'>
           <h2>Telugu Annual Plan</h2>
           <p>Unlimited 12 Months access to 100% Telugu<br/>Movies and Web series</p>
           <div className='line'></div>
           <div className='btn'>
           <h3>INR 399/year</h3>
           <button>Subscribe</button>
           </div>
      </div>
      <div className='division'>
           <h2>Telugu Quarterly Plan</h2>
           <p>Unlimited 3 Months access to 100% Telugu<br/>Movies and Web series</p>
           <div className='line'></div>
           <div className='btn'>
           <h3>INR 199/3 months</h3>
           <button>Subscribe</button>
           </div>
      </div>
    </div>
    </Sub>
    </>
  )
}
