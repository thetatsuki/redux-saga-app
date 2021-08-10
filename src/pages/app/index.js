import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './app.scss';
import InputSearch from '../../components/input-search';
import Table from '../../components/table';
import Pagenation from '../../components/pagenation';
import WhiteBlock from '../../components/white-block';
import { selectPeople } from '../../redux/reducers/people/selectors';
import { LOAD_PEOPLE } from '../../redux/reducers/people/action';

const App = () => {
    const people = useSelector(selectPeople);
    const dispatch = useDispatch();

    const changePage = (newPage) => {
        dispatch({
            type: LOAD_PEOPLE,
            payload: {
                page: newPage,
                search: people.search,
            },
        });
    };

    const changeSearch = (event) => dispatch({
        type: LOAD_PEOPLE,
        payload: {
            page: 1,
            search: event.target.value,
        },
    });

    return (
        <WhiteBlock className='block-main'>
            <InputSearch onChange={changeSearch}/>

            <Table people={people}/>

            <Pagenation
                active={people.page}
                total={people.data?.count}
                onChange={changePage}
            />
        </WhiteBlock>
    );
};

export default App;
