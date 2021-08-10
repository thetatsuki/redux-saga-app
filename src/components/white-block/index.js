import React from 'react';

import './whiteBlock.scss';
import clsx from 'clsx';

const WhiteBlock = ({
    children,
    className,
}) => {
    return (
        <div className={clsx('block', className)}>
            {children}
        </div>
    );
};

export default WhiteBlock;
