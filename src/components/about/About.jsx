import React from 'react'
import './about.css'
import me2 from '../../assets/me2.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { FaBookOpen } from 'react-icons/fa'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me2} alt='About image' className='im-black' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>
                <ul>
                  <li>RV College of Engineering, Bangalore
                  <br></br>
                  <span className='year_of_graduation'>2020-2024</span></li>
                  
                  <li>  Mary Immaculate School, West Bengal <br></br> <span className='year_of_graduation'>2003-2019</span></li>
                 
                </ul>
              
              </small>
              
            </article>
            <article className='about__card'>
              <FaBookOpen className='about__icon' />
              <h5>Coursework</h5>
              <small>
                <ul>
                  <li className='about_lists'>Data Structures & Algorithms</li>
                  <li className='about_lists'>Joy of Computing in Python</li>
                  <li className='about_lists'>Management Information Systems</li>
                  <li className='about_lists'>Computer Networks</li>
                  <li className='about_lists'>Real time Operating Systems</li>
                </ul>
              </small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Hobbies</h5>
              <small>
                <ul>
                  <li className='about_lists'>Sports</li>
                  <li className='about_lists'>Gym</li>
                  <li className='about_lists'>Rock and Metal music</li>
                  <li className='about_lists'>Geopolitics</li>
                </ul>
              </small>
            </article>
          </div>
          <p>
            Hello there! Welcome to my portfolio. <br /> After 2 years of
            coding, I've come to realize that being a programmer isn't just
            about writing code. It's about understanding requirements and
            translating them into code to shape the product. Instead of thinking
            in code, I approach it by considering the impact. I firmly believe
            my skills can be harnessed to scale a product and create a
            meaningful impact.
          </p>
          <a href='#contact' className='btn btn-primary'>
            Let's Talk{' '}
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
