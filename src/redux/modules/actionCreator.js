import { CHANGE_COLLAPSED, USER_LOGIN_STATUS } from './actionType';

export const changeCollapsedAction = status => ({
	type: CHANGE_COLLAPSED,
	status
});

export const changeLoginStatus = status => ({
	type: USER_LOGIN_STATUS,
	status
});
