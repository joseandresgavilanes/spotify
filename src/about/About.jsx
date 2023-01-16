import React from "react";
import "./About.scss";
import Tarjeta from "./tarjeta/Tarjeta";

const About = () => {
  return (
    <div className="about_main_container">
      <div className="about">
        <div className="container-about">
          <div className="superiores">
            <Tarjeta
              className="primera"
              nombre="Jose Andres Gavilanes"
              puesto="Full-Stack Developer"
              foto="./images/Pepe.jpeg"
              linkG="https://github.com/joseandresgavilanes"
              linkl="https://www.linkedin.com/in/jose-andres-gavilanes-2954691b5/"
              linki="https://www.instagram.com/andres_gavilanes1/"
              detalle="Full Stack (React | Node | Springboot) and pixel-perfect developer with 3 years of experience in UI development."
            />
            <Tarjeta
              nombre="Alexander Cangas"
              puesto="Systems engineer"
              foto="./images/Alexander.jpeg"
              linkG="https://github.com/xander06"
              linkl="https://www.linkedin.com/in/alexander-c-00a2967b/"
              linki="https://www.instagram.com/xander0684/"
              detalle="Hi, I am a Computer Systems Engineer. Systems Assistant at Vehicle Dealership. Learn Java  and React"
            />
          </div>
          <div className="inferior">
            <Tarjeta
              nombre="Adrian Bastidas"
              puesto="Systems engineering student"
              foto="./images/Adrian.jpg"
              linkG="https://github.com/Adrian-Bastidas"
              linkl="https://www.linkedin.com/in/adrian-rafael-bastidas-moya-5b940419b/"
              linki="https://www.instagram.com/diefarbedelmundo/"
              detalle="Currently studying at university, I would like to become a full-stack web and mobile developer."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
