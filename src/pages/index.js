import React, {useState} from 'react';
import SideBar from '../components/SideBar/';
import NavBar from '../components/NavBar';
import SectionInfo from '../components/SectionInfo';
import Info from '../components/Info';
import Info2 from '../components/Info2/index2';
import { homeObjOne, homeObjThree,} from '../components/Info/Data';
import {homeObjTwo} from '../components/Info2/Data2';
import Services from '../components/Services';
import { Footer } from '../components/Footer';
import {Products} from '../components/ShoppingCart/Products/index'

const Home = () => {

    const [isOpen, setIsOpen]= useState(false);
    const toggle =() => {
        setIsOpen(!isOpen)
    };
  return (
    <>
    
    <SideBar isOpen={isOpen} toggle={toggle}/>
      
     <NavBar toggle={toggle}/>
    <SectionInfo isOpen={isOpen} toggle={toggle}/>
    <Info {...homeObjOne} />
    <Info2 {...homeObjTwo}/>
    <Services></Services>
    {/* <Info {...homeObjThree}/> */}
    <Products></Products>
    <Footer/>
    </>
  );
};

export default Home;