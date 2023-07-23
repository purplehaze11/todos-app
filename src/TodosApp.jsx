import Input from './Input';
// import TodosList from './TodosList';
import { useState } from 'react';

function TodosApp() {
	const [textVal, setTextVal] = useState('');
	const [todo, setTodo] = useState([]);

	const handleChange = (e) => {
		setTextVal(e.target.value);
	};

	const addTodo = () => {
		setTodo((oldTodo) => {
			return [...oldTodo, textVal];
		});
	};

	const submit = (e) => {
		e.preventDefault();
		addTodo();
		setTextVal('');
	};

	const list = todo.map((unit) => <li>{unit}</li>);

	return (
		<>
			<div>
				<h1>Todos</h1>
				<ul>{list}</ul>
			</div>
			<Input
				textVal={textVal}
				textChange={handleChange}
				submit={submit}
			/>
		</>
	);
}

export default TodosApp;
