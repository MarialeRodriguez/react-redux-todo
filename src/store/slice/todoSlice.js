import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: 'todos',
        initialState: {
            items: []
        },
        reducers: {
            addTodo: (state, action) => {
                console.log('add state, action ', state, action);
                state.items.push(action.payload);
            },
            addFromLocalStorage: (state, action) => {
                console.log('add state from local storage, action ', state, action);
                state.items = action.payload;
            },
            removeTodo: (state, action) => {
                console.log('remove state, action ', state, action);
                state.items = state.items.filter(item => item.id !== action.payload.id);
            },
        },
});

// Action creators are generated for each case reducer function
export const { addTodo, addFromLocalStorage, removeTodo } = todoSlice.actions;
export default todoSlice;