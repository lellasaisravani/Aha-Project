import React,{useState,useEffect} from "react";
import styled from 'styled-components';
import "./index.css";

const Slidemovies=() => {
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
     "https://image-resizer-cloud-api.akamaized.net/image/CBD9AA66-4399-46EB-BAEC-2BEB17420372/0-3x1.jpg?width=2304",
     "https://image-resizer-cloud-api.akamaized.net/image/D640207C-36E0-4BDB-BDC8-12B1EA8E208A/0-3x1.jpg?width=2304",
    "https://image-resizer-cloud-api.akamaized.net/image/2006C576-B34E-4544-8C54-8C89B8740416/0-3x1.jpg?width=2304",
    "https://image-resizer-cloud-api.akamaized.net/image/A2D5FA05-208D-45CC-9394-7AA4BEA8ED8F/0-3x1.jpg?width=2304"
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
export default Slidemovies