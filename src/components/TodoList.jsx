import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Loading } from "./Loading";
import { useNavigate } from "react-router-dom";
import { useTodos } from "../hooks/useTodos";

export const TodoList = ({ todoList }) => {

  const { remove } = useTodos();
  const navigate = useNavigate();
  const [ isLoading, setisLoading ] = useState( true );
  const todosList = useSelector((state) => state.items);


  useEffect(() => {
    if( todosList ) 
    setisLoading(false)
  }, [todosList])
  

  return (
    <div className="container mt-5 mb-5">
    <div className="flex flex-col">
      <h1 className="text-center">Lista de Tareas:</h1>

      { isLoading
        ?(<Loading/>)
       :(
        <ul className="d-block list-group">
          {todosList.map((item) => (
            <li
              key={item.id}
              className="mb-2 font-medium d-flex justify-content-between p-2 list-group-item list-group-item-light"
            >
              {item.title} - {item.description}

              <div className="d-flex">
              <button 
                disabled={ item.available === false  }
                className="btn btn-warning d-flex flex-row items-center justify-center mb-2 cursor pointer" 
                onClick={() => navigate('/pay')}>Comprar</button>
              
              <button 
                className="btn btn-secondary d-flex flex-row items-center justify-center mb-2 cursor pointer" 
                onClick={() => remove(item)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
)}

        <div className="w-full d-flex flex-row justify-end">
          <button className="pointer btn btn-outline-secondary" onClick={() => navigate('/add')}>Agregar tarea</button>
        </div>
    </div>
    </div>
  )
}

