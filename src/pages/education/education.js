import React from 'react';

import educationData from '../../data/education';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Avatar from '../../ui-components/avatar';

const Education = () => {

    return (
        <Section>
            <Title>Education</Title>
            <div>
                {
                    educationData.map((item, key) => {
                        return (
                            <div className="experience" key={ key }>
                                <div className="entity-info">
                                    <div className="entity-info--details">
                                        <Avatar src={ item.entityLogo } type="entity" />
                                        <div>
                                            <div className="entity-info--details_name">{ item.name }</div>
                                            <div className="entity-info--details_position">{ item.entity }</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    { item.description.en }
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </Section>
    );
}

export default Education;