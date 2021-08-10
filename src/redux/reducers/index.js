import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import peopleReducer from './people';
import detailReducer from './peopleDetails';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    people: peopleReducer,
    detail: detailReducer,
});

export default rootReducer;
