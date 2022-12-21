import { map, range } from '@laufire/utils/collection';

const SquareManager = {
	generateSquares: (squareCount) =>
		map(range(0, squareCount), (number) => {
			const colCount = Math.ceil(Math.sqrt(squareCount));
			const column = number % colCount;
			const row = (number - column) / colCount;
			const margin = 80;
			const id = number;

			return {
				id, row, column, margin,
			};
		}),
	getSquareCount: (context) => {
		const { state: { squareCount }, config: { maxSquareCount }} = context;

		return squareCount < maxSquareCount
			? squareCount + 1
			: 1;
	},
};

export default SquareManager;
