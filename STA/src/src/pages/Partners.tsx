// import React from 'react';
import '../components/style.css';
import trustbank from '../assets/trustbank.svg'
import gbos from '../assets/gbos.svg'

export function Partners() {
  return (
    <div id='partners' className="section">
      
      <h2 style={{marginTop:'60px',}}>Our Partners</h2>
      <div className=''>
        <img src={trustbank} className='pat-image' alt='trust' />
        <img src={gbos} className='pat-image' alt='gbos' />
        {/* <img src={gbos} alt='gbos' style={{height:'200px', width:'300px', margin:'10px'}} />
        <img src={gbos} alt='gbos' style={{height:'200px', width:'300px', margin:'10px'}} />
        <img src={gbos} alt='gbos' style={{height:'200px', width:'300px', margin:'10px'}} />
        <img src={gbos} alt='gbos' style={{height:'200px', width:'300px', margin:'10px'}} /> */}
        </div>
        <hr className="section-separator" />


    </div>
  );
}

export default Partners;
