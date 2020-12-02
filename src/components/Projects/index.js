import React from 'react';
import Icon1 from '../../images/svg-8.svg';
import Icon2 from '../../images/svg-9.svg';
import Icon3 from '../../images/svg-10.svg';
import Icon4 from '../../images/svg-11.svg';
import Icon5 from '../../images/svg-12.svg';


import {
  FaGithub,
  FaRocket
} from 'react-icons/fa'
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  DeployLinkIcon1,
  DeployLinkIcon2,
  ProjectsSecondP,
  
  
} from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='Projects'>
      <ProjectsH1></ProjectsH1>
      <ProjectsWrapper>
        
        <ProjectsCard >
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Hotel Motel</ProjectsH2>
          <ProjectsP>
            Full stack hotel property management system.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/hotel_motel' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://hotelmotel.herokuapp.com/' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
          
        </ProjectsCard>
        
        
        
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Fitness Tracker</ProjectsH2>
          <ProjectsP>
            You can access our platform and lglglg.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
       
       
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Park Finder</ProjectsH2>
          <ProjectsP>
            Unlock our special membership.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        
        
        </ProjectsCard>
        
        
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>Budget Tracker</ProjectsH2>
          <ProjectsP>
            We help reduce your fees.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
        
        
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Reduce Expenses</ProjectsH2>
          <ProjectsP>
            We help reduce your fees.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
        
        
        <ProjectsCard>
          <ProjectsIcon src={Icon5} />
          <ProjectsH2>Calculator</ProjectsH2>
          <ProjectsP>
            We help reduce your fees.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://codepen.io/clairebohlen' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
      
      
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
