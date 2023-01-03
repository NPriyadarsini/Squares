import { rndValue } from '@laufire/utils/random';
import SquareManager from '../services/SquareManager';
import actions from './actions';
import context from './context';

describe('actions', () => {
	const { setInput, toggleTicker } = actions;

	test('setInput', () => {
		const squareCount = Symbol('squareCount');

		jest.spyOn(SquareManager, 'getSquareCount')
			.mockReturnValue(squareCount);

		const expectation = { squareCount };
		const result = setInput(context);

		expect(SquareManager.getSquareCount).toHaveBeenCalledWith(context);
		expect(result).toEqual(expectation);
	});
	test('toggleTicker', () => {
		const tickerPaused = rndValue(true, false);
		const state = { tickerPaused };

		const result = toggleTicker({ state });

		expect(result).toEqual({ tickerPaused: !tickerPaused });
	});
});
