import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems = () => {
	const isler = useSelector(state => state.todos.veri)
	const tamamlamlanan = isler.filter(todo => todo.completed === true).length

	return <h4 className='mt-3'>Tamamlanmış İşler: {tamamlamlanan + " / " + isler.length}</h4>;
};

export default TotalCompleteItems;
