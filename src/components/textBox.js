import { React } from 'react';

// eslint-disable-next-line no-magic-numbers
const TextBox = (context) => {
	const { state, actions } = context;

	return <label className="textBox">Enter the no:{}
		<input
			id="input"
			type="number"
			value={ state.numberSelected }
			onChange={ (evt) =>
				actions.setInput(evt.target.value) }
		/>
	</label>;
};

export default TextBox;
