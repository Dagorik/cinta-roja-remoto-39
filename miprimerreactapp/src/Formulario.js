import React, { useState } from 'react';
import axios from 'axios';

function Formulario() {

    const [name,setName] = useState('');
    const [last_name, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [biography, setBiography] = useState('')
    const [gender, setGender] = useState('F')

    const onChangeInput = (event) => {
        console.log(event.target.value);
        console.log(event.target.id);
        const id = event.target.id;
        
        switch (id) {
            case 'name':
                setName(event.target.value);
                break;
            case 'last_name':
                setLastName(event.target.value);
                break;
            case 'age':
                setAge(event.target.value);
                break;
            case 'biography':
                setBiography(event.target.value);
                break;
            case 'gender':
                setGender(event.target.value);
                break;
            default:
                break;
        }
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log('SE SUBMITEO');
        
        const body = {
            name: name,
            last_name: last_name,
            age: age,
            nacionalidad: 'MX',
            biography: biography,
            gender: gender            
        }

        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', body)
            .then((result) => {
                console.log(result.data);
                alert('Ya se creo nuestro author');
            }).catch((err) => {
                console.log(err);
                alert('No funciono');
            });
    }

    return (
        <form className="m-5" onSubmit={onSubmitHandler} >
            <div className="form-group">
                <label>Nombre</label>
                <input type="text" className="form-control" id="name" onChange={onChangeInput} value={name} />
            </div>

            <div className="form-group">
                <label>Apellidos</label>
                <input type="text" className="form-control" id="last_name" onChange={onChangeInput} value={last_name} />
            </div>

            <div className="form-group">
                <label>Biografia</label>
                <input type="text" className="form-control" id="biography" onChange={onChangeInput} value={biography} />
            </div>

            <div className="form-group">
                <label>Edad</label>
                <input type="number" className="form-control" id="age" onChange={onChangeInput} value={age} />
            </div>

            <div className="form-group">
                <label>Genero</label>
                <select className="form-control" id="gender" onChange={onChangeInput} value={gender} >
                    <option value="F">Femenino</option>
                    <option value="M">Masculino</option>
                </select>
            </div>

            <button type="submit">Guardar el author</button>

        </form>
    )

}

export default Formulario;
