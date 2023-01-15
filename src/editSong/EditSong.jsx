import React,{useState} from 'react'
import axios from 'axios';

const EditSong = () => {
    const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [image, setImage] = useState(null);
  const [audio, setAudio] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [cancion,setCancion]=useState(null);

  const handleChange = (e) => {
    setId(e.target.value);
  }

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  }

  const handleAudioChange = (e) => {
    setAudio(e.target.files[0]);
  }

  const handleSubmit = (e) => {
    console.log("presionaste")
    e.preventDefault();
    axios.get(`https://loggin-api-production.up.railway.app/titulo/${id}`)

      .then(response => {
        console.log("llamaste a la api")
        setTitle(response.data.titulo);
        setLyrics(response.data.letra);
        setCancion(response.data)
        console.log(response.data)
        setIsDisabled(false);
      });
      console.log("terminaste con la api")
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const datos={
        id:cancion[0].id,
        titulo:cancion[0].titulo,
        letra:cancion[0].letra,
        anio:cancion[0].anio,
        carilla:cancion[0].carilla,
        musica:cancion[0].musica,
        nombre:cancion[0].nombre,
        idDueño:cancion[0].idDueño
    }
    console.log(cancion)
    let formData = new FormData();
    formData.append('id',cancion[0].id)

    if(title){
        datos.titulo=title;
        formData.append('titulo', title);
    }
    if(lyrics){
        datos.letra=lyrics
        formData.append('letra', lyrics);
    }

    if(image){
        let imageReader = new FileReader();
        imageReader.readAsDataURL(image);
        imageReader.onloadend = ()=> {
          formData.append('carilla', imageReader.result);
          datos.carilla=imageReader.result;
        }
    }
    if(audio){
        let audioReader = new FileReader();
        audioReader.readAsDataURL(audio);
        audioReader.onloadend = ()=> {
          formData.append('musica', audioReader.result);
          datos.musica=audioReader.result
        }
    }
    console.log(formData)

    axios.put(`https://loggin-api-production.up.railway.app/usuarios/musicaUpdate`, datos)
      .then(response => {
        console.log(response);
        alert("Canción editada exitosamente");
      });
  }

  return (
    <form>
      <label>Buscar por ID:</label>
      <input type="text" id="id" value={id} onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Buscar</button>
      <br/><br/>

      <label>Título:</label>
      <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} disabled={isDisabled}/>
      <br/><br/>

      <label>Letra:</label>
      <textarea id="lyrics" value={lyrics} onChange={(e) => setLyrics(e.target.value)} disabled={isDisabled}></textarea>
      <br/><br/>

      <label>Carilla:</label>
      <input type="file" id="image" onChange={handleImageChange} disabled={isDisabled}/>
      <br/><br/>

      <label>Música:</label>
      <input type="file" id="audio"
      onChange={handleAudioChange} disabled={isDisabled}/>
      <br/><br/>
      <button type="button" onClick={handleEdit} disabled={isDisabled}>Editar</button>
</form>
  )

}

export default EditSong