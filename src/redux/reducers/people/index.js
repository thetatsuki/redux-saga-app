import { LOAD_PEOPLE, LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS } from './action';

const initialReducer = {
    page: 1,
    search: '',
    loading: false,
    error: null,
    data: null,
};

const peopleReducer = (state = initialReducer, action) => {
    switch (action.type) {
    case LOAD_PEOPLE:
        const { page, search } = action.payload;

        return {
            ...state,
            loading: true,
            page,
            search,
        };
    case LOAD_PEOPLE_SUCCESS:
        return {
            ...state,
            data: action.payload,
            loading: false,
        };
    case LOAD_PEOPLE_FAILURE:
        return {
            ...state,
            error: action.payload,
            loading: false,
        };
    default:
        return state;
    }
};

export default peopleReducer;
