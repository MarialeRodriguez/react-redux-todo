import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { todoSlice } from "../store/slice/todoSlice";

const { addTodo, removeTodo, addFromLocalStorage, modifyState } = todoSlice.actions;

export function useTodos () {

    const dispatch = useDispatch();
    const todos = useSelector((state) => state.items);

    useEffect(() => {
        addStoredTodos();
    }, []);

    const addStoredTodos = () => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || undefined;
        if (todos?.length === 0 && storedTodos?.length > 0) {
            dispatch(addFromLocalStorage(storedTodos));
        }
    };
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    
    const add = (todo) => {
        dispatch(addTodo(todo));
    };

    const remove = (todo) => {
        dispatch(removeTodo(todo));
    };

    const modify = (todo) => {
        dispatch(modifyState(todo));
    }

    return { todos, add, remove, addStoredTodos, modify };
}