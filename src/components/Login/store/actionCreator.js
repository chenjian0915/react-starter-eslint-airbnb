import history from '../../../shared/history';
import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT
} from './actionTypes';
import sessionService from '../../../services/session.service';

export const loginRequest = () => {
    return {
        type: LOGIN_REQUEST
    };
};

export const loginSuccess = userData => {
    return {
        type: LOGIN_SUCCESS,
        userData
    };
};

export const loginFail = error => {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

export const login = credentials => {
    return dispatch => {
        dispatch(loginRequest());
        console.log(credentials);
        /* Comment out for testing
        sessionService.login(credentials)
            .then(
                response => {
                    let res = response.data;
                    console.log(res);

                    if (res.status === 200) {
                        let data = res.data;

                        // test user infomation
                        let userInfo = {
                            id: data.user.id,
                            name: data.user.name,
                            token: data.token
                        };

                        sessionStorage.removeItem('admin_user');
                        sessionStorage.setItem('admin_user', JSON.stringify(userInfo));

                        console.log(userInfo);
                        dispatch(loginSuccess(userInfo));

                        history.push('/');
                    } else {
                        dispatch(loginFail('login failed.'));
                    }
                }
            )
            .catch( error => dispatch(loginFail(error)) );
        */

        // test user infomation
        const userInfo = {
            id: '1',
            name: 'admintest',
            token: 'tokentest'
        };

        sessionStorage.removeItem('admin_user');
        sessionStorage.setItem('admin_user', JSON.stringify(userInfo));

        dispatch(loginSuccess(userInfo));

        history.push('/');
        // eslint-disable-next-line no-restricted-globals
        // location.href = '/';
    };
};

export const logout = () => {
    sessionService.logout();
    return { type: LOGOUT };
};
