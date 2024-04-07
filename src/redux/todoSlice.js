import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
	name: 'todos',
	initialState: [
		{ id: 1, title: 'Elma al', completed: false },
		{ id: 2, title: 'Muz al', completed: false },
		{ id: 3, title: 'Süt al', completed: true },
		{ id: 4, title: 'Yumurt al', completed: false },
		{ id: 5, title: 'Ekmek al', completed: false },
	],
	reducers: {
		addTodo: (state, action) => {
			const todo = {
				id: new Date(),
				title: action.payload.title,
				completed: false,
			};
			state.push(todo);
		},

	},
});


export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;