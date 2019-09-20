import {
	CHANGE_COLLAPSED,
	USER_LOGIN_STATUS,
	CHANGE_OPEN_KEYS
} from './actionType';

export const changeCollapsedAction = status => ({
	type: CHANGE_COLLAPSED,
	status
});

export const changeLoginStatus = status => ({
	type: USER_LOGIN_STATUS,
	status
});
export const changeOpenKeys = data => ({
	type: CHANGE_OPEN_KEYS,
	data
});
