import { call, apply, takeEvery, take, select, put, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'connected-react-router';

import { selectPeople } from '../../reducers/people/selectors';
import { matchPath } from 'react-router';
import { DETAILS_ROUTE, getRouteConfig, MAIN_ROUTE } from '../../../routes';
import { LOAD_PEOPLE, LOAD_PEOPLE_SUCCESS } from '../../reducers/people/action';
import { LOAD_PEOPLE_DETAILS, LOAD_PEOPLE_DETAILS_FAILED, LOAD_PEOPLE_DETAILS_SUCCESS } from '../../reducers/peopleDetails/action';

export function* loadPeopleDetail({ payload }) {
    const { id } = payload;

    try {
        const request = yield call(fetch, `https://swapi.dev/api/people/${id}`);
        const data = yield apply(request, request.json);

        yield put({
            type: LOAD_PEOPLE_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: LOAD_PEOPLE_DETAILS_FAILED,
            payload: error,
        });
    }
}

export function* loadPeopleList({ payload }) {
    const {
        page,
        search,
    } = payload;

    const request = yield call(
        fetch,
        `https://swapi.dev/api/people?page=${page}&search=${search}`,
    );
    const data = yield apply(request, request.json);

    yield put({
        type: LOAD_PEOPLE_SUCCESS,
        payload: data,
    });
}

export function* loadPeopleOnRouteEnter() {
    while (true) {
        const action = yield take(LOCATION_CHANGE);


        const peoplePage = matchPath(action.payload.location.pathname, getRouteConfig(MAIN_ROUTE));

        if (peoplePage) {
            const state = yield select(selectPeople);
            const {
                page,
                search,
            } = state;

            yield put({
                type: LOAD_PEOPLE,
                payload: {
                    page,
                    search,
                },
            });
        }


        const detailsPage = matchPath(action.payload.location.pathname, getRouteConfig(DETAILS_ROUTE));

        if (detailsPage) {
            const { id } = detailsPage.params;

            yield put({
                type: LOAD_PEOPLE_DETAILS,
                payload: {
                    id,
                },
            });
        }
    }
}

export default function* peopleSaga() {
    yield fork(loadPeopleOnRouteEnter);
    yield takeEvery(LOAD_PEOPLE, loadPeopleList);
    yield takeEvery(LOAD_PEOPLE_DETAILS, loadPeopleDetail);
}
