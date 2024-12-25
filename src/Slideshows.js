import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import "./index.css";

const Slideshows=() => {
  const HeadingMain=styled.header`
  img{
    height:500px;
    width:100%;
  }
  .slideshow{
    display: flex;
    justify-content: center;
  }
  `;
  
    let arr=["https://image-resizer-cloud-api.akamaized.net/image/5957573E-6CA4-44AE-8906-EA5ACC2E155A/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/92E6ED76-4BBB-43F9-A08A-586F2B40811A/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/1F13BF71-DD1A-482B-8036-954249228049/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/B0955511-2C3E-4DC3-BDF4-3DDDCAF9C965/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/0E441AF9-EB39-4A16-B48B-61464EB72E97/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/0D1D494F-5E9D-4419-AC3D-193CD11265A1/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/001555FB-4187-41D1-AE05-F94F61FB53B9/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/A7C4A8B8-B112-4C74-8AFC-6128093F71FC/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/7B31231A-B129-481B-B8BE-5E73B88F9D91/0-3x1.jpg?width=2304"
]
   const[count,setCount]=useState(0);
    useEffect(() => {
        setTimeout(() => {
         setCount((count) => count+1);   

        },5000);
        
      });
      if(count>arr.length-1) {
      setCount((count) => 0);   
      }
  return (
    <div>
     <div className="slideshow">
        <HeadingMain>
          <img src= {arr[count]}/>
        </HeadingMain>
        </div>
  </div>
  )
}
export default Slideshows