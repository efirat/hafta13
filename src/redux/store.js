import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import undoReducer from './undoSlice';


export default configureStore({
	reducer: {
		todos: todoReducer,
		undos: undoReducer
	},
	middleware : (getDefaultMiddleware) => 
		getDefaultMiddleware({
			serializableCheck: false
		})
});
