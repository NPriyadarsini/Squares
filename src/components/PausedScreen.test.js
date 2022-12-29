import { render } from '@testing-library/react';
import PausedScreen from './PausedScreen';

describe('PausedScreen', () => {
	test('When Process is Paused - Paused Screen Displayed ', () => {
		const context = {
			state: {
				tickerPaused: true,
			},
		};

		const { getByRole } = render(PausedScreen(context));

		expect(getByRole('popup')).toBeInTheDocument();
		expect(getByRole('paused')).toBeInTheDocument();
	});
	test('When Process is Running  - Paused Screen is not Displayed', () => {
		const context = {
			state: {
				tickerPaused: false,
			},
		};

		const result = PausedScreen(context);

		expect(result).toEqual(false);
	});
});
