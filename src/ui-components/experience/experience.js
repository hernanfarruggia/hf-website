import React from 'react';

import Avatar from '../avatar';

import './experience.css';

const Experience = (props) => {

    const renderTimeFrame = () => {
        return props.item.timeframe ?
            (<div className="entity-info--timeframe">
                { props.item.timeframe }
            </div>) :
            null;
    }

    return (
        <div className="experience">
            <div className="entity-info">
                <div className="entity-info--details">
                    <Avatar src={ props.item.entityLogo } type="entity" />
                    <div>
                        <div className="entity-info--details_name">{ props.item.name }</div>
                        <div className="entity-info--details_position">{ props.item.entity }</div>
                    </div>
                </div>

                { renderTimeFrame() }

            </div>
            <div>
                { props.item.description.en }
            </div>
        </div>
    )
}

export default Experience;