import { map, range } from '@laufire/utils/collection';

const SquareManager = {
	generateSquares: (squareCount) => map(range(0, squareCount), (number) => {
		const colCount = Math.ceil(Math.sqrt(squareCount));
		const column = number % colCount;
		const row = (number - column) / colCount;
		const offset = 175;
		const margin = 100;
		const id = number;
		const style = {
			top: `calc( 50vh + ${ (row * margin) - offset }px )`,
			left: `calc( 50vw + ${ (column * margin) - offset }px)`,
		};

		return {
			id, style,
		};
	}),
};

export default SquareManager;
