function TodosList({ id, value, remove }) {
	return (
		<li id={id}>
			<div className='join'>
				<input
					type='text'
					className='input input-bordered w-full max-w-xs join-item'
					value={value}
					disabled
				/>
				<button
					className='btn btn-square btn-outline rounded-l'
					onClick={remove}
				>
					<svg
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
					</svg>
				</button>
			</div>
		</li>
	);
}

export default TodosList;
