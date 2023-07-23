import Input from './Input';
import TodosList from './TodosList';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

function TodosApp() {
	const [textVal, setTextVal] = useState('');
	const [todo, setTodo] = useState([]);

	const handleChange = (e) => {
		setTextVal(e.target.value);
	};

	const addTodo = () => {
		setTodo((oldTodo) => {
			return [...oldTodo, { id: uuid(), value: textVal }];
		});
	};

	const submit = (e) => {
		e.preventDefault();
		addTodo();
		setTextVal('');
	};

	const remove = (id) => {
		setTodo((oldTodo) => {
			return oldTodo.filter((unit) => unit.id !== id);
		});
	};

	return (
		<>
			<div>
				<h1>Todos</h1>
				<ul>
					{todo.map((unit) => (
						<TodosList
							key={unit.id}
							value={unit.value}
							id={unit.id}
							remove={() => remove(unit.id)}
						/>
					))}
				</ul>
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
