import React from 'react';

const Square = ({ id, row, column, margin }) =>
	<div
		key={ id }
		role="square"
		{ ...{
			className: 'square',
			style: {
				top: `calc( 5vh + ${ row * margin }px )`,
				left: `calc( 5vw + ${ column * margin }px)`,
			},
		} }
	/>;

export default Square;
