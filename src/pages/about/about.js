import React from 'react';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';

import aboutData from '../../data/about';

const About = () => {

    return (
        <Section>
            <Title>About Me</Title>
            <div>
                <img src="" className="profile-img" alt="about me!" />
                <div>
                    { aboutData.description.en }
                </div>
            </div>
        </Section>
    );
}

export default About;