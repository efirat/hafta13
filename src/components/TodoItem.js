import React from 'react';
import { useDispatch } from 'react-redux';
import {toggleComplete, deleteTodo} from '../redux/todoSlice'
import {saveTodo} from '../redux/undoSlice'

const TodoItem = ({ id, title, completed }) => {
	const dispatch = useDispatch();

	function tamamlandiIslem(){
		dispatch(toggleComplete({ id:id, completed: !completed }));
	}

	function silmeIslemi(){
		dispatch(deleteTodo({ id:id }));
		dispatch(saveTodo({ title, completed }))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<label>
						<input type='checkbox' className='form-check-input me-3' checked={completed} onChange={tamamlandiIslem}/>
						{title}
					</label>
				</span>
				<button className='btn btn-danger' onClick={silmeIslemi}>Sil</button>
			</div>
		</li>
	);
};

export default TodoItem;
