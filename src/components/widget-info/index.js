import React from 'react';

import './widget-info.scss';

const WidgetInfo = ({
    title,
    subtitle,
    large,
    icon,
}) => {
    return (
        <div className='widget' id={large ? 'large' : ''}>
            <img src={icon} className="widget-icon"/>

            <h1 className="widget-title">
                {title}
            </h1>

            <p className="widget-subtitle">
                {subtitle}
            </p>
        </div>
    );
};

export default WidgetInfo;
