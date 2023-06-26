import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTodos } from "../hooks/useTodos";
import { useNavigate } from 'react-router-dom';

export const TodoForm = () => {

const [ title, setTitle] = useState('');
const [ description, setDescription ]= useState('');
const { add: addTodo } = useTodos();
const navigate = useNavigate();

const onSubmit = ( event ) => {
  event.preventDefault();
  console.log(title, description);

  if( title.length === 0 || description.length === 0 ) return;

  const newTodo = {
    id: uuidv4(),
    title,
    description,
  };
  addTodo(newTodo);

  setTitle('');
  setDescription('');
  navigate('/');
};

  return (

    <div className="container col-6 mt-5 mb-5">
      <div className='flex flexgrid text-center'>

      <form onSubmit={ onSubmit }>
      <h1>Crear nueva tarea:</h1>
      <br />

      <input
            type="text"
            className='form-control'
            placeholder='Ingrese el titulo'
            name='title'
            value={ title }
            onChange={ (event) => setTitle(event.target.value) }
            />

      <input
            type="text"
            className='form-control mt-3'
            placeholder='Ingrese la descripcion'
            name='description'
            value={ description }
            onChange={ (event) => setDescription(event.target.value) }
            />

      <button
            type='submit'
            className='btn btn-primary mt-3 w-100'>
        Agregar tarea
      </button>
    </form>
    </div>
    </div>
  )
}

