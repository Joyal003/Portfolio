import React from 'react'
import './intro.css'
import bg from '../../assets/photo1.png'
import {Link} from 'react-scroll'
import hireBtn from '../../assets/hireme.png'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Joyal Jose</span>
        <br/>Frontend Developer</span>
        <p className='introPara'>I'm a skilled front-end developer with knowledge in<br/>
             ReactJs,HTML,CSS and Tailwind </p>
        <Link><button className='btn'><img src={hireBtn} className='btnImg' alt='hireme'/>
        Hire Me</button></Link>

        </div>
            <img src={bg} alt='profile' className='bg'/>
    </section>
  )
}

export default Intro