import React from 'react';

import './detail.scss';
import WhiteBlock from '../../components/white-block';
import WidgetInfo from '../../components/widget-info';

import close from '../../assets/img/close.svg';
import name from '../../assets/img/name.svg';
import height from '../../assets/img/height.svg';
import mass from '../../assets/img/mass.svg';
import year from '../../assets/img/year.svg';
import { Link } from 'react-router-dom';
import { peopleDetails } from '../../redux/reducers/peopleDetails/selectors';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading';

const Detail = () => {
    const { loading, data } = useSelector(peopleDetails);

    return (
        <WhiteBlock className="block-detail">
            <header>
                <h2>Luke Skywalker</h2>

                <Link to={'/'}>
                    <img src={close}/>
                </Link>
            </header>

            {loading ? (
                <div className="block-detail-loading">
                    <ReactLoading
                        className="block-detail-loading__load"
                        type={'spin'}
                        color={'#0079D4'}
                        height={'10px'}
                        width={'5%'}
                    />
                </div>
            ) : (
                <div className="block-detail__widgets">
                    <div className="block-detail__widgets-block">
                        <WidgetInfo
                            title={data.name}
                            subtitle="name"
                            icon={name}
                            large={true}
                        />
                    </div>
                    <div className="block-detail__widgets-block">
                        <WidgetInfo
                            title={data.height}
                            subtitle="height"
                            icon={height}
                        />
                        <WidgetInfo
                            title={data.mass}
                            subtitle="mass"
                            icon={mass}
                        />
                        <WidgetInfo
                            title={data.birth_year}
                            subtitle="year"
                            icon={year}
                        />
                    </div>
                </div>
            )}
        </WhiteBlock>
    );
};

export default Detail;
