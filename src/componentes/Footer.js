import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className='mail-footer'>
        <div className='float-right d-none d-sm-block'>
        <b> primera version del proyecto v1</b>
        </div>
        <strong> copyright 2024 <Link to={"#"}></Link></strong> All rights reserved
    </footer>
  );
}

export default Footer;
