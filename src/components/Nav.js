import React from 'react';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';


const Nav=()=> {
    const X=styled.nav`
    ul{
        list-style:none;
        display:flex;
    }
    ul li{
        padding:7px 28px 10px 28px;
        text-align:left;
        padding-top:
    }
    .Nav_List{
        text-decoration:none;
        text-transform:lower-case;
        font-size:16px;
        color:  rgb(215, 213, 213);
        display:inline-block;
        text-align:center;
    }
    .Nav_List:focus{
        color:white;
    }
    .nav_list{
        display:flex;
        text-align:center;
        flex:1 1 200px;
        background-color:rgb(29, 30, 32);
        height:64px;
        width:550px;
        
    }
    `;
  return (
    <div>
        <X>
      <nav>
        <div className='nav_list'>
            <ul>
                <li>
                    <NavLink to="/" className="Nav_List">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className="Nav_List">Movies</NavLink>
                </li>
                <li>
                    <NavLink to="/shows" className="Nav_List">Shows</NavLink>
                </li>
                <li>
                    <NavLink to="/kids" className="Nav_List">Kids</NavLink>
                </li>
                <li>
                    <NavLink to="/myaha" className="Nav_List">My aha</NavLink>
                </li>
            </ul>
        </div>
      </nav>
      </X>
    </div>
  )
}
export default Nav
