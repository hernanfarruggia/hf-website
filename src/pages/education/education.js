import React from 'react';

import educationData from '../../data/education';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Experience from '../../ui-components/experience';

const Education = () => {

    return (
        <Section id="academics">
            <Title>Academics</Title>
            <div>
                {
                    educationData.map((item, key) => {
                        return <Experience item={ item } key={ key } />;
                    })
                }

            </div>
        </Section>
    );
}

export default Education;