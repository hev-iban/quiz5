import axios from 'axios';

export const login = (username, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_LOGIN_REQUEST' });
        const { data } = await axios.post('/api/login', { username, password });
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: data });
    } catch (error) {
        dispatch({
            type: 'USER_LOGIN_FAIL',
            payload: error.response && error.response.data.message ? error.response.data.message : error.message,
        });
    }
};
