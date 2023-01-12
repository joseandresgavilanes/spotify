import React from 'react'
import "./About.scss";
import Tarjeta from './tarjeta/Tarjeta';

const About = () => {
  return (
    <div className='container'>
        <div className='superiores'>
            
            <Tarjeta nombre="Jose Andres Gavilanes" puesto="Developer" foto='./logo192.png' linkG='https://github.com/joseandresgavilanes' linkl='' linki=''/>
            <Tarjeta nombre="Alexander Cangas" puesto="Developer" foto='./logo192.png' linkG='https://github.com/xander06' linkl='https://www.linkedin.com/in/alexander-c-00a2967b/' linki='https://www.instagram.com/xander0684/'/>
            
            </div>
            <div className='inferior'>
            <Tarjeta nombre="Adrian Bastidas" puesto="systems engineering student" foto='./logo192.png' linkG='https://github.com/Adrian-Bastidas' linkl='https://www.linkedin.com/in/adrian-rafael-bastidas-moya-5b940419b/' linki='https://www.instagram.com/diefarbedelmundo/'/>
            </div>
    </div>
  )
}

export default About