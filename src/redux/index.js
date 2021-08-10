import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import rootSaga from './sagas';
import { history } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
    ),
);

sagaMiddleware.run(rootSaga);

export default store;
