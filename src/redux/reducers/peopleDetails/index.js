import { LOAD_PEOPLE_DETAILS, LOAD_PEOPLE_DETAILS_SUCCESS, LOAD_PEOPLE_DETAILS_FAILED } from './action';

const initialState = {
    error: null,
    loading: false,
    data: null,
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
    case LOAD_PEOPLE_DETAILS:
        return {
            ...state,
            loading: true,
        };
    case LOAD_PEOPLE_DETAILS_SUCCESS:
        return {
            ...state,
            error: null,
            loading: false,
            data: action.payload,
        };
    case LOAD_PEOPLE_DETAILS_FAILED:
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
    default:
        return state;
    }
};

export default detailReducer;
