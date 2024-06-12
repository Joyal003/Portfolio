import React from 'react'
import './works.css';
import portfolio1 from '../../assets/portfolio-1.png';
import portfolio2 from '../../assets/portfolio-2.png';
import portfolio3 from '../../assets/portfolio-3.png';
import portfolio4 from '../../assets/portfolio-4.png';
import portfolio5 from '../../assets/portfolio-5.png';
import portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My portfolio</h2>
        <span className='workDesc'>I take pride in paying attention to the smallest details and  ...</span>
        <div className='workImgs'>
            <img src={portfolio1} alt='img1' className='workImg'/>
            <img src={portfolio2} alt='img2' className='workImg'/>
            <img src={portfolio3} alt='img3' className='workImg'/>
            <img src={portfolio4} alt='img4' className='workImg'/>
            <img src={portfolio5} alt='img5' className='workImg'/>
            <img src={portfolio6} alt='img6' className='workImg'/>
        </div>
        <button className='workBtn'>See More</button>
    </section>
  )
}

export default Works