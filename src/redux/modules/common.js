import { CHANGE_COLLAPSED, USER_LOGIN_STATUS } from './actionType';

const defaultCommonState = {
	collapsed: false,
	loginStatus: true
};

const common = (state = defaultCommonState, action) => {
	switch (action.type) {
		case CHANGE_COLLAPSED:
			return {
				...state,
				collapsed: action.status
			};
		case USER_LOGIN_STATUS:
			return {
				...state,
				loginStatus: action.status
			};
		default:
			return state;
	}
};

export default common;
