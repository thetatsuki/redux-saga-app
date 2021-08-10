import { Route, Switch } from 'react-router-dom';
import { App, Detail, NotFound } from './pages';


export const MAIN_ROUTE = 'MAIN_ROUTE';
export const DETAILS_ROUTE = 'DETAILS_ROUTE';

const routes = [
    {
        id: MAIN_ROUTE,
        path: '/',
        exact: true,
        component: App,
    },
    {
        id: DETAILS_ROUTE,
        path: '/peopleDetails/:id',
        exact: true,
        component: Detail,
    },
    {
        path: '*',
        exact: true,
        component: NotFound,
    },
];

export const getRouteConfig = (id) => {
    const route = routes.find((route) => route.id === id);

    if (route) {
        return route;
    }
};

export default function Routes() {
    return (
        <Switch>
            {routes.map((route) => {
                const { id, ...props } = route;

                return (
                    <Route key={id} {...props}/>
                );
            })}
        </Switch>
    );
}
