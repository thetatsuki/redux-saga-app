import React from 'react';

import './pagination.scss';


const LIMIT = 10;

const Pagenation = ({
    active,
    total,
    onChange = () => {},
}) => {
    const totalPages = Math.ceil(total / LIMIT);

    return (
        <div className='pages'>
            {Array
                .from({ length: totalPages },
                    (_, index) => index + 1)
                .map((item, index) => {
                    const actived = index === active - 1;
                    const action = () => onChange(item);

                    return (
                        <p
                            onClick={action}
                            className={actived ? 'active' : ''}
                            key={index}
                        >
                            {item}
                        </p>
                    );
                })}
        </div>
    );
};

export default Pagenation;
