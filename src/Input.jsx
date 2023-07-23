function Input({ textVal, textChange, submit }) {
	return (
		<form
			id='form'
			onSubmit={submit}
		>
			<div className='join rounded-xl'>
				<input
					name='add-todo'
					className='input input-bordered join-item'
					placeholder='Add new Todo'
					value={textVal}
					onChange={textChange}
					minLength={1}
				/>
				<button
					type='submit'
					className='btn btn-primary join-item'
				>
					Add
				</button>
			</div>
		</form>
	);
}

export default Input;
