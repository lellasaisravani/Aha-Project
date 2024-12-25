import React from 'react';
import ReactDOM from 'react-dom';
import Kids from './Kids';
import Home from './Home';
import Movies from './Movies';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./components/Header";
import Shows from './Shows';
import Myaha from './Myaha';
import "./index.css";
import Footer from './components/Footer';
import Subscribe from './Subscribe';
import Signin from './Signin';
import Homesee1 from './Homesee1';
import Homesee2 from './Homesee2';
import Homesee3 from './Homesee3';
import Homesee4 from './Homesee4';
import Homenew1 from './Homenew1';
import Homenew2 from './Homenew2';
import Homenew3 from './Homenew3';
import Moviesee1 from './Moviesee1';
import Moviesee2 from './Moviesee2';
import Moviesee3 from './Moviesee3';
import Moviesee4 from './Moviesee4';
import Showsee1 from './Showsee1';
import Showsee2 from './Showsee2';
import Showsee3 from './Showsee3';
import Showsee4 from './Showsee4';
import Kidssee1 from './Kidssee1';
import Kidssee2 from './Kidssee2';
import Kidssee3 from './Kidssee3';
import Kidssee4 from './Kidssee4';
ReactDOM.render(
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/movies" element={<Movies/>}></Route>
    <Route path="/shows" element={<Shows/>}></Route>
    <Route path="/kids" element={<Kids/>}></Route>
    <Route path="/myaha" element={<Myaha/>}></Route>
    <Route path="/subscribe" element={<Subscribe/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/homesee1" element={<Homesee1/>}></Route>
    <Route path="/homesee2" element={<Homesee2/>}></Route>
    <Route path="/homesee3" element={<Homesee3/>}></Route>
    <Route path="/homesee4" element={<Homesee4/>}></Route>
    <Route path="/moviesee1" element={<Moviesee1/>}></Route>
    <Route path="/moviesee2" element={<Moviesee2/>}></Route>
    <Route path="/moviesee3" element={<Moviesee3/>}></Route>
    <Route path="/moviesee4" element={<Moviesee4/>}></Route>
    <Route path="/Homenew1" element={<Homenew1/>}></Route>
    <Route path="/Homenew2" element={<Homenew2/>}></Route>
    <Route path="/Homenew3" element={<Homenew3/>}></Route>
    <Route path="Showsee1" element={<Showsee1/>}></Route>
    <Route path="Showsee2" element={<Showsee2/>}></Route>
    <Route path="Showsee3" element={<Showsee3/>}></Route>
    <Route path="Showsee4" element={<Showsee4/>}></Route>
    <Route path="Kidssee1" element={<Kidssee1/>}></Route>
    <Route path="Kidssee2" element={<Kidssee2/>}></Route>
    <Route path="Kidssee3" element={<Kidssee3/>}></Route>
    <Route path="Kidssee4" element={<Kidssee4/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>,document.getElementById("root")
);