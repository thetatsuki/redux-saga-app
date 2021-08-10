import React from 'react';

import './table-item.scss';

const TableItem = ({
    name,
    year,
    gender,
    hair,
    height,
    gray,
}) => {
    return (
        <div className="table-items" id={gray ? 'gray' : ''}>
            <div className="table-items__item long">
                {name}
            </div>
            <div className="table-items__item">
                {year}
            </div>
            <div className="table-items__item">
                {gender}
            </div>
            <div className="table-items__item">
                {hair}
            </div>
            <div className="table-items__item">
                {height}
            </div>
        </div>
    );
};

export default TableItem;
