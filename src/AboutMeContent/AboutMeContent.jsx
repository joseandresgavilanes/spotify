import React, { useState, useRef } from 'react';
import './AboutMeContent.scss'
import axios from 'axios';


const AboutMeContent = () => {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        id: 12345,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        password:'Latano123',
        nickname: 'JDoe',
        photoUrl: './logo192.png',
    });
    const [imageFile, setImageFile] = useState(null);

    const handleEditClick = () => {
        setEditing(!editing);
    }

    const handlePhotoChange = (e) => {
        setImageFile(e.target.files[0]);
    }

    const handleSaveClick = async () => {
        if(imageFile){
            // Enviar la nueva foto al servidor y actualizar la foto del usuario
            const formData = new FormData();
            formData.append("image", imageFile);
            // Enviar el formData con la nueva foto al servidor
            try{
                const response = await axios.post("/api/user/updatePhoto", formData);
                // si el servidor responde con un 200 actualizar el estado de la foto del usuario
                if(response.status === 200){
                    setUser({...user, photoUrl: response.data.url});
                }
            }catch(error){
                console.log(error);
            }
        }
        // Enviar los cambios del usuario al servidor
        try {
            const response = await axios.patch("/api/user", user);
            // si el servidor responde con un 200, mostrar un mensaje de exito
            if (response.status === 200) {
                console.log("Usuario actualizado correctamente");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='about_user_scroll'>
            <div className='aboutMe_user'>
                <div className="user-container">
                    <img className="user-photo rounded-circle" src={user.photoUrl} alt="User Picture" />
                    <button className='aboutMe_editar_foto' onClick={handleButtonClick} style={{ display: editing ? 'block' : 'none' }}><i class="fa-solid fa-pen-to-square"></i></button>
                    <input type="file" ref={fileInputRef} onChange={handlePhotoChange} style={{display: 'none'}} />
                    <h1>Account overview</h1>
                    <div className='AboutMe_user_info'>
                        <div className='aboutMe_user_columnas'>
                            <p>User Id:</p>
                            <h2 className='AboutMe_userId_text'>{user.id}</h2>
                        </div>
                        <div className='aboutMe_user_columnas'>
                            <p>Name:</p>
                            <input className="user-first-name" type="text" value={user.firstName} disabled={!editing} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
                        </div>
                        <div className='aboutMe_user_columnas'>
                            <p>Last name:</p>
                            <input className="user-last-name" type="text" value={user.lastName} disabled={!editing} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
                        </div>
                        <div className='aboutMe_user_columnas'>
                            <p>Email:</p>
                            <input className="user-email" type="email" value={user.email} disabled={!editing} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                        </div>
                        <div className='aboutMe_user_columnas'>
                            <p>Password:</p>
                            <input className="user-password" type={editing ? "text" : "password"} value={user.password} disabled={!editing} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                        </div>
                        <div className='aboutMe_user_columnas'>
                            <p>Artist name:</p>
                            <input className="user-nickname" type="text" value={user.nickname} disabled={!editing} onChange={(e) => setUser({ ...user, nickname: e.target.value })} />
                        </div>
                    </div>
                    <div className='Contenedor_botones_about'>
                    <div className='AboutMe_botones_de_pie'>
                    <button className="save-button" onClick={handleSaveClick} style={{ display: editing ? 'block' : 'none' }}>Guardar</button>
                    <button className="edit-button" onClick={handleEditClick}>{editing ? 'Cancelar' : 'Editar'}</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMeContent