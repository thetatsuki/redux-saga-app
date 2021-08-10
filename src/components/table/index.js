import React from 'react';
import ReactLoading from 'react-loading';

import './table.scss';
import TableItem from '../table-item';
import { Link } from 'react-router-dom';

const Table = ({ people }) => {
    return (
        <div className="table">
            <div className="table-header">
                <div className="table-header__item long">
                    name
                </div>
                <div className="table-header__item">
                    birth year
                </div>
                <div className="table-header__item">
                    gender
                </div>
                <div className="table-header__item">
                    hair color
                </div>
                <div className="table-header__item">
                    height
                </div>
            </div>

            <div style={{ marginTop: '20px' }}>
                {people.loading ? (
                    <div className="loading">
                        <ReactLoading
                            className="loading-component"
                            type={'spin'}
                            color={'#0079D4'}
                            height={'10px'}
                            width={'5%'}
                        />
                    </div>
                ) : (people?.data?.results?.map((people, index) => {
                    const id = people.url.replace(/\D/g, '');
                    return (
                        <Link key={index} to={'/peopleDetails/' + id}>
                            <TableItem
                                name={people.name}
                                year={people.birth_year}
                                gender={people.gender}
                                hair={people.hair_color}
                                height={people.height}
                                gray={index % 2 === 0}
                            />
                        </Link>
                    );
                }))}
            </div>
        </div>
    );
};

export default Table;
