import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import TotalCompleteItems from './components/TotalCompleteItems';
import {TbArrowBackUp} from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from './redux/todoSlice';
import { deleteLastTodo } from './redux/undoSlice';


const App = () => {
	const dispatch = useDispatch()
	const undosArray = useSelector(state=>state.undos)

	function geriAl(){
		const sonSilinen = [...undosArray].pop()
		//const sonSilinen = undosArray[ undosArray.length - 1 ]

		dispatch(addTodo({
			title: sonSilinen.title,
			completed: sonSilinen.completed
		}))
		dispatch(deleteLastTodo())
	}

	return (
		<div className='container bg-white p-4 mt-5'>
			<div className='d-flex justify-content-between align-items-center'>
				<h1>Yapılacak İşler</h1>
				{
				undosArray.length>0 && 
					<button className='btn btn-smll btn-secondary d-flex align-items-center gap-1 position-relative' onClick={geriAl}>
						<TbArrowBackUp/> Geri Al
						<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{undosArray.length}</span>
					</button>
				}
			</div>
			<AddTodoForm />
			<TodoList />
			<TotalCompleteItems />
		</div>
	);
};

export default App;