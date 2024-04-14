import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, todoSort } from "../redux/todoSlice";


const AddTodoForm = () => {
  const [value, setValue] = useState("");
  //const vekilFonksiyon = useDispatch();
  const dispatch = useDispatch();
	const yapilacaklar = useSelector(state=>state.todos)  

  const onSubmit = (event) => {
    event.preventDefault();
    if (value) {
      dispatch(addTodo({ title: value }));
      setValue("");
    }
  };
  
	const todoSirala = () => {
		dispatch( todoSort() )
	};

  return (
    <form onSubmit={onSubmit} className="form-inline mt-3 mb-3">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Yapılacak yeni bir iş girin..."
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="btn btn-primary" type="submit" id="button-addon1">Ekle</button>
      </div>
      <button className="btn btn-secondary" onClick={todoSirala} id="button-addon1">Sırala{yapilacaklar.sirala ? " ("+yapilacaklar.sirala+")" : ""}</button>
    </form>
  );
};

export default AddTodoForm;
