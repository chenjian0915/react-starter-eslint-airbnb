import { CHANGE_COLLAPSED } from './actionType';

const defaultCommonState = {
	collapsed: false
};

const common = (state = defaultCommonState, action) => {
	switch (action.type) {
		case CHANGE_COLLAPSED:
			return {
				...state,
				collapsed: action.status
			};
		case 'COLLAPSED1':
			return {
				...state,
				collapsed: action.collapsed
			};
		default:
			return state;
	}
};

export default common;
