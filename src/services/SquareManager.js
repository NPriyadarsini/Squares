import { map, range } from '@laufire/utils/collection';

const two = 2;
const size = 50;
const margin = 100;
const SquareManager = {
	Boxes: (colCount) => map(range(0, colCount ** two), (number) => {
		const colum = number % colCount;
		const row = (number - colum) / colCount;
		const offset = ((colCount * size) + ((colCount - 1) * margin)) / two;

		return {
			id: number,
			style: {
				top: `calc( 50vh + ${ (row * margin) - offset }px )`,
				left: `calc( 50vw + ${ (colum * margin) - offset }px)`,
				width: `${ size }px`,
				height: `${ size }px`,
			},
		};
	}),
};

export default SquareManager;
