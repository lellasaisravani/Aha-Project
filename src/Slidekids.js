import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import "./index.css";

const Slidekids=() => {
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
  
    let arr=["https://image-resizer-cloud-api.akamaized.net/image/AE0B5149-A41D-492E-9031-9D00DA960641/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/E1393AA6-177A-419F-80D6-0B40F698AC90/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/A58C083C-585A-4A6F-BB39-0272D41669E8/0-3x1.jpg?width=2304",
"https://image-resizer-cloud-api.akamaized.net/image/D63864BB-29C7-46C2-98BE-9E679222E6D6/0-3x1.jpg?width=2304"
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
export default Slidekids