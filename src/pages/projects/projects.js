import React from 'react';

import projectsData from '../../data/projects';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Experience from '../../ui-components/experience';

const Projects = () => {

    return (
        <Section>
            <Title>Main Projects</Title>
            <div>

                {
                    projectsData.map((item, key) => {
                        return <Experience item={ item } key={ key } />;
                    })
                }
                

            </div>
        </Section>
    );
}

export default Projects;