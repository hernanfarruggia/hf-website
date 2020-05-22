import React from 'react';

import workData from '../../data/work';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Experience from '../../ui-components/experience';

const Work = () => {
    return (
        <Section isSecondary>
            <Title>Work History</Title>
            <div>

                {
                    workData.map((item, key) => {
                        return <Experience item={ item } key={ key } />;
                    })
                }

            </div>
        </Section>
    );
}

export default Work;