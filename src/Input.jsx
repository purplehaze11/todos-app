function Input({ textVal, textChange, submit }) {
	return (
		<form
			id='form'
			onSubmit={submit}
		>
			<div className='join'>
				<input
					name='add-todo'
					className='input input-bordered join-item'
					placeholder='Add new Todo'
					value={textVal}
					onChange={textChange}
				/>
				<button
					type='submit'
					className='btn join-item rounded-r'
				>
					Add
				</button>
			</div>
		</form>
	);
}

export default Input;
