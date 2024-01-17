import React from 'react';
import '../styles/Footer.css'
import { Instagram } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Instagram /><Twitter /><Facebook /><LinkedIn />
      </div>
      <p>&copy; 2024 pedropizza.com</p>
    </div>
  )
}

export default Footer
