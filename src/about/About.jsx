import React from 'react'
import "./About.scss";
import Tarjeta from './tarjeta/Tarjeta';

const About = () => {
  return (
    <div className='container'>
        <div className='superiores'>
            <Tarjeta nombre="Jose Andres Gavilanes" puesto="Developer" foto='./logo192.png'/>
           
            <Tarjeta nombre="Alexander Cangas" puesto="Developer" foto='./logo192.png'/>
            </div>
            <div className='inferior'>
            <Tarjeta nombre="Adrian Bastidas" puesto="systems engineering student" foto='./logo192.png'/>
            </div>
    </div>
  )
}

export default About