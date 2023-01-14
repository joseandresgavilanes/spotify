import React from 'react'
import './AboutMeContent.scss'

const AboutMeContent = () => {
    return (
        <div className='About_user'>
            <div className='about_container'>
                <div className='aboutMe_image_container'>
                    <div className="about_imagen_usuario" style={{ backgroundImage: "url('./logo192.png')" }}>
                    </div>
                    <div className='about_id_user'>
                    <p>8b03b2b2</p>
                </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMeContent