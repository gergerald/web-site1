import React from 'react';
import '../styles/Home.css';

export default function Home() {
  return (
    <header>
      <div className='dscrptn'>
        <h1 className='dscrptn-head'>HOSPITALYARN</h1>
        <div className='dscrptn-info'>
          <p>Address: 123 Main Street, City, Country</p>
          <p>Phone: +1 123-456-7890</p>
          <p>Email: info@hospitalyarn.com</p>
          <div className='social-icons'>
            <a href='#' className='social-icon'>Facebook</a>
            <a href='#' className='social-icon'>Twitter</a>
            <a href='#' className='social-icon'>Instagram</a>
          </div>
        </div>
        <p className='footer-copy'>&copy; 2023 Hospitalyarn. All Rights Reserved</p>
      </div>
    </header>
  );
}
