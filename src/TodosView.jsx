import Input from './Input';
import TodosList from './TodosList';
import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

const getData = () => {
	const data = JSON.parse(localStorage.getItem('todo'));
	if (!data) return [];
	return data;
};

function TodosView() {
	const [textVal, setTextVal] = useState('');
	const [todo, setTodo] = useState(getData());

	useEffect(() => {
		localStorage.setItem('todo', JSON.stringify(todo));
	}, [todo]);

	const handleChange = (e) => {
		setTextVal(e.target.value);
	};

	const addTodo = () => {
		setTodo((oldTodo) => {
			return [...oldTodo, { id: uuid(), value: textVal, done: false }];
		});
	};

	const submit = (e) => {
		e.preventDefault();
		textVal.length > 0 && addTodo();
		setTextVal('');
	};

	const remove = (id) => {
		setTodo((oldTodo) => {
			return oldTodo.filter((unit) => unit.id !== id);
		});
	};

	const done = (id) => {
		setTodo((oldTodo) => {
			return oldTodo.map((u) => {
				if (u.id === id) {
					return { ...u, done: !u.done };
				} else {
					return u;
				}
			});
		});
	};

	return (
		<>
			<div className='card container max-w-2xl w-auto bg-base-200 shadow-xl my-2 mx-auto'>
				<div className='card-body items-center text-center'>
					<h1 className='card-title'>Todos!</h1>
					<ul>
						{todo.map((unit) => (
							<TodosList
								key={unit.id}
								value={unit.value}
								id={unit.id}
								remove={() => remove(unit.id)}
								done={() => done(unit.id)}
								isDone={unit.done}
							/>
						))}
					</ul>
					<div className='card-actions'>
						<Input
							textVal={textVal}
							textChange={handleChange}
							submit={submit}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default TodosView;
