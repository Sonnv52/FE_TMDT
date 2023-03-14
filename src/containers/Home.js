import React from 'react';

import { useNavigate } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Box from "../components/Box/Box";
export default function Home() {
  return (
    <div>
        <div className='banner'>
        <Banner/>
        </div>
        <div className='box'>
         <Box/>
        </div>
    </div>
  )
}
