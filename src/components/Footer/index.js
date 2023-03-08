import React from 'react';
import './style.scss'

import { BiCopyright } from "react-icons/bi";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <footer>
        <div><p className='logo'>trppd __</p></div>
        <div className='copyrights'><BiCopyright/> <p>2017-2018</p></div>
        <div className='social'>
            <a href="#"><BsInstagram/></a>
            <a href="#"><BsFacebook/></a>
            <a href="#"><BsTwitter/></a>
        </div>
    </footer>
  )
}

export default Footer