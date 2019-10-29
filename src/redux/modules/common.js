import {
    CHANGE_COLLAPSED,
    USER_LOGIN_STATUS,
    CHANGE_OPEN_KEYS
} from './actionType';

const defaultCommonState = {
    collapsed: false,
    loginStatus: true,
    openKeys: []
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
    case CHANGE_OPEN_KEYS:
        return {
            ...state,
            openKeys: action.data
            };
    default:
            return state;
    }
};

export default common;
