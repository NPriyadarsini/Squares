/* eslint-disable no-mixed-spaces-and-tabs */
import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import App from './App';
import Ticker from './services/Ticker';
import * as Squares from './components/Squares';
import { rndString } from '@laufire/utils/random';
import * as PausedScreen from './components/PausedScreen';

const random = rndString();
const context = {
	actions: {
		toggleTicker: jest.fn(),
	},
	random: random,
};

test('renders the component appropriately', () => {
	jest.spyOn(React, 'useEffect').mockImplementation((fn) => fn());
	jest.spyOn(Ticker, 'start').mockReturnValue();
	jest.spyOn(Squares, 'default').mockReturnValue(<div role="squares"/>);
	jest.spyOn(PausedScreen, 'default').mockReturnValue(<div role="popup"/>);

	const { getByRole } = render(App(context));

	fireEvent.click(getByRole('App'));

	expect(getByRole('App')).toBeInTheDocument();
	expect(getByRole('squares')).toBeInTheDocument();
	expect(getByRole('popup')).toBeInTheDocument();

	expect(React.useEffect).toHaveBeenCalledWith(expect.any(Function), []);
	expect(Ticker.start).toHaveBeenCalledWith(context);
	expect(Squares.default.mock.calls[0][0]).toEqual(context);
	expect(PausedScreen.default.mock.calls[0][0]).toEqual(context);
	expect(context.actions.toggleTicker).toHaveBeenCalledWith();
});
