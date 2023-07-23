function TodosList({ id, value, remove, done, isDone }) {
	return (
		<li
			id={id}
			className='border-2 border-primary m-2 rounded-xl'
		>
			<div className='join flex'>
				<input
					type='checkbox'
					className='checkbox checkbox-md checkbox-primary join-item rounded-none self-center m-2'
					onChange={done}
					checked={isDone}
				/>
				<input
					type='text'
					className='input input-bordered join-item hover:cursor-default'
					value={value}
					disabled
				/>
				<button
					className='btn btn-square join-item'
					onClick={remove}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<line
							x1='18'
							y1='6'
							x2='6'
							y2='18'
						></line>
						<line
							x1='6'
							y1='6'
							x2='18'
							y2='18'
						></line>
					</svg>
				</button>
			</div>
		</li>
	);
}

export default TodosList;

{
	/* <svg
	xmlns='http://www.w3.org/2000/svg'
	className='h-6 w-6'
	fill='none'
	viewBox='0 0 24 24'
	stroke='currentColor'
>
	<path
		strokeLinecap='round'
		strokeLinejoin='round'
		strokeWidth='2'
		d='M6 18L18 6M6 6l12 12'
	/>
</svg>; */
}
