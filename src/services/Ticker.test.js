import { random } from '@laufire/utils';
import Ticker from './Ticker';

describe('Ticker', () => {
	const { start, toggleTicker } = Ticker;

	test('start', () => {
		const TickerDelay = Symbol('TickerDelay');
		const context = {
			config: { TickerDelay },
		};
		const setIntervalMock = (Fn) => Fn();

		jest.spyOn(Ticker, 'toggleTicker').mockReturnValue();
		jest.spyOn(global, 'setInterval').mockImplementation(setIntervalMock);
		jest.spyOn(random, 'rndValue').mockReturnValue();

		start(context);

		expect(Ticker.toggleTicker)
			.toHaveBeenCalledWith(context);
		expect(global.setInterval)
			.toHaveBeenCalledWith(expect.any(Function), TickerDelay);
	});
	describe('toggle ticker', () => {
		test('When Process is running ', () => {
			const tickerPaused = false;
			const context = {
				state: { tickerPaused },
				actions: {
					setInput: jest.fn(),
				},
			};

			toggleTicker(context);

			expect(context.actions.setInput)
				.toHaveBeenCalledWith(context);
		});
		test('When Process is Paused ', () => {
			const tickerPaused = true;
			const context = {
				state: { tickerPaused },
				actions: {
					setInput: jest.fn(),
				},
			};

			toggleTicker(context);

			expect(context.actions.setInput).not.toBeCalled();
		});
	});
});
