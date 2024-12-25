import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import "./index.css";

const Slidehome=() => {
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
  
    let arr=["https://image-resizer-cloud-api.akamaized.net/image/E1FBF386-AB73-41CB-AFC8-77879FBDE6C4/0-3x1.jpg?width=2304",
     "https://image-resizer-cloud-api.akamaized.net/image/3ED2F48E-3E78-4AD7-A498-622ED4E53AA9/0-3x1.jpg?width=2304",
     "https://image-resizer-cloud-api.akamaized.net/image/5957573E-6CA4-44AE-8906-EA5ACC2E155A/0-3x1.jpg?width=2304",
     "https://image-resizer-cloud-api.akamaized.net/image/9C926936-7AB5-40C7-81AC-CD2412751E9C/0-3x1.jpg?width=2304",
     "https://image-resizer-cloud-api.akamaized.net/image/D640207C-36E0-4BDB-BDC8-12B1EA8E208A/0-3x1.jpg?width=2304",
    "https://image-resizer-cloud-api.akamaized.net/image/0D1D494F-5E9D-4419-AC3D-193CD11265A1/0-3x1.jpg?width=2304",
    "https://image-resizer-cloud-api.akamaized.net/image/1F13BF71-DD1A-482B-8036-954249228049/0-3x1.jpg?width=2304",
    "https://image-resizer-cloud-api.akamaized.net/image/2006C576-B34E-4544-8C54-8C89B8740416/0-3x1.jpg?width=2304",
    "https://image-resizer-cloud-api.akamaized.net/image/5eaf2f18-7d76-494f-9049-695ed74e61bc/0-3x1.jpg?width=2304"
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
export default Slidehome