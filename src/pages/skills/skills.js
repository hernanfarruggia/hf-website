import React from 'react';

import skillsData from '../../data/skills';

import Section from '../../ui-components/section';
import Title from '../../ui-components/title';
import Avatar from '../../ui-components/avatar';

import './skills.css';

const Skills = () => {

    return (
        <Section isSecondary id="skills">
            <Title>Skills</Title>
            <div className="skills">

                {
                    skillsData.map((item, key) => {
                        return (
                            <div className="skill" key={ key }>
                                <Avatar src={ item.image } type="skill" />
                                <span className="skill--name">{ item.name }</span>
                            </div>
                        );
                    })
                }

            </div>
        </Section>
    );
}

export default Skills;