import React from 'react';

import projectsData from '../../data/projects';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Avatar from '../../ui-components/avatar';

const Projects = () => {

    return (
        <Section>
            <Title>Main Projects</Title>
            <div>

                {
                    projectsData.map((item, key) => {
                        return (
                            <div className="experience" key={ key }>
                                <div className="entity-info">
                                    <div className="entity-info--details">
                                        <Avatar src={ item.companyLogo } type="entity" />
                                        <div>
                                            <div className="entity-info--details_name">{ item.name }</div>
                                            <div className="entity-info--details_position">{ item.company }</div>
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

export default Projects;