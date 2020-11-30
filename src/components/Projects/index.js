import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP
} from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='Projects'>
      <ProjectsH1></ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Reduce Expenses</ProjectsH2>
          <ProjectsP>
            We help reduce your fees and increase your overall revenue.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Virtual Offices</ProjectsH2>
          <ProjectsP>
            You can access our platform online anywhere in the world.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Premium Benefits</ProjectsH2>
          <ProjectsP>
            Unlock our special membership card that returns 5% cash back.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Reduce Expenses</ProjectsH2>
          <ProjectsP>
            We help reduce your fees and increase your overall revenue.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Reduce Expenses</ProjectsH2>
          <ProjectsP>
            We help reduce your fees and increase your overall revenue.
          </ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Reduce Expenses</ProjectsH2>
          <ProjectsP>
            We help reduce your fees and increase your overall revenue.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
