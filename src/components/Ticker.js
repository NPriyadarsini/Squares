
const Ticker = {
	start: (context) => {
		const { actions, config } = context;
		const { TickerDelay } = config;

		return setInterval(() =>
			actions.setInput(context), TickerDelay);
	},
};

export default Ticker;
