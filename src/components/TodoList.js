import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList = () => {
	//storedan veri cekiyoruz
	const yapilacaklar = useSelector(state=>state.todos)

	return (
		<ul className='list-group'>
			{yapilacaklar.veri.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
