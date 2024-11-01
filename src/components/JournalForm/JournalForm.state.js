export const INITIAL_STATE = {
	validation: {
		title: true,
		date: true,
		text: true,
	},
	values: {
		title: '',
		date: '',
		text: '',
		tag: '',
	},
	isReady: false,
};

export function formReducer(state, action) {
	switch (action.type) {
		case 'CLEAR':
			return { ...INITIAL_STATE };
		case 'SET': {
			return { ...state, values: { ...state.values, ...action.payload } };
		}
		case 'RESET_VALIDATION':
			return { ...state, validation: INITIAL_STATE.validation };
		case 'SUBMIT': {
			const { title, date, text } = state.values;
			const titleValidity = Boolean(title?.trim());
			const dateValidity = Boolean(date);
			const textValidity = Boolean(text?.trim());

			return {
				...state,
				validation: {
					title: titleValidity,
					date: dateValidity,
					text: textValidity,
				},
				isReady: titleValidity && dateValidity && textValidity,
			};
		}
	}
}