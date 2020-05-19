import React from 'react';

import workData from '../../data/work';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Avatar from '../../ui-components/avatar';

const Work = () => {
    return (
        <Section isSecondary>
            <Title>Work History</Title>
            <div>

                {
                    workData.map((item, key) => {
                        return (
                            <div className="experience" key={key}>
                                <div className="entity-info">
                                    <div className="entity-info--details">
                                        <Avatar src={ item.companyLogo } type="entity" />
                                        <div>
                                            <div className="entity-info--details_name">{ item.company }</div>
                                            <div className="entity-info--details_position">{ item.position }</div>
                                        </div>
                                    </div>
                                    <div className="entity-info--timeframe">
                                        { item.timeframe }
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

export default Work;