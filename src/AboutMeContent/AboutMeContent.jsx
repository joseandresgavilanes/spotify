import React from 'react'
import './AboutMeContent.scss'

const AboutMeContent = () => {
    return (
        <div className='About_user'>
            <div className='about_container'>
                <div className='aboutMe_image_container'>
                    <div className="about_imagen_usuario" style={{ backgroundImage: "url('./logo192.png')" }}>
                    </div>
                </div>
                <div className='about_id_user'>
                    @jfjfjfj
                </div>
            </div>
        </div>
    )
}

export default AboutMeContent