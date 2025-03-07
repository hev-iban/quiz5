const initialState = {
    loading: false,
    userInfo: null,
    error: null,
};

export const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return { ...state, loading: true };
        case 'USER_LOGIN_SUCCESS':
            return { loading: false, userInfo: action.payload, error: null };
        case 'USER_LOGIN_FAIL':
            return { loading: false, userInfo: null, error: action.payload };
        default:
            return state;
    }
};
