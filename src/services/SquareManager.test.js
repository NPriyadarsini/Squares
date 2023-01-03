import * as collection from '@laufire/utils/collection';
import { rndBetween } from '@laufire/utils/random';
import SquareManager from './SquareManager';

describe('SquareManager', () => {
	const { generateSquares, generateSquare, getSquareCount } = SquareManager;
	const maxSquareCount = 64;
	const hundred = 100;

	test('Generate Squares', () => {
		const squareCount = Symbol('squareCount');
		const number = Symbol('number');
		let dummyFunction = 0;
		const context = {
			state: {
				squareCount,
			},
		};
		const rangeReturnValue = Symbol('rangeReturnValue');
		const getSquares = Symbol('getSquares');

		jest.spyOn(collection, 'range').mockReturnValue(rangeReturnValue);
		jest.spyOn(SquareManager, 'generateSquare')
			.mockReturnValue();
		jest.spyOn(collection, 'map')
			.mockImplementation((dummy, func) => {
				dummyFunction = func;
				func(number);
				return getSquares;
			});

		const result = generateSquares(context);

		expect(SquareManager.generateSquare)
			.toHaveBeenCalledWith({ ...context, data: { number }});
		expect(collection.map)
			.toHaveBeenCalledWith(rangeReturnValue, dummyFunction);

		expect(result).toEqual(getSquares);
	});
	test('Generate Square', () => {
		const squareCount = Symbol('squareCount');
		const number = rndBetween(1, maxSquareCount);
		const squareRoot = Symbol('squareRoot');
		const context = {
			state: {
				squareCount,
			},
			data: {
				number,
			},
		};
		const colCount = rndBetween(1, maxSquareCount);

		jest.spyOn(Math, 'sqrt').mockReturnValue(squareRoot);
		jest.spyOn(Math, 'ceil').mockReturnValue(colCount);

		const result = generateSquare(context);

		expect(Math.sqrt).toHaveBeenCalledWith(squareCount);
		expect(Math.ceil).toHaveBeenCalledWith(squareRoot);

		expect((result.row * colCount) + result.column)
			.toEqual(context.data.number);
		expect(result.id).toEqual(context.data.number);
	});
	describe('Get Square Count', () => {
		test('Get Square Count-When Square Count is less than 64', () => {
			const squareCount = rndBetween(0, maxSquareCount - 1);
			const context = {
				state: {
					squareCount,
				},
				config: {
					maxSquareCount,
				},
			};
			const result = getSquareCount(context);

			expect(result).toEqual(squareCount + 1);
		});
		test('Get Square Count-When Square Count is greater than 64', () => {
			const squareCount = rndBetween(maxSquareCount, hundred);
			const context = {
				state: {
					squareCount,
				},
				config: {
					maxSquareCount,
				},
			};
			const result = getSquareCount(context);

			expect(result).toEqual(1);
		});
	});
});
