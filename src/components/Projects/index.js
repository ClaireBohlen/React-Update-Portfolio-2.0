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
        
        {/* Hotel Motel Project Card  */}
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
        
        
        {/* Fitness Tracker Project Card  */}
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Fitness Tracker</ProjectsH2>
          <ProjectsP>
            Full stack workout tracker App.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/fitnessTracker' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://fierce-spire-72446.herokuapp.com/?id=5fc117b061854600170605f9' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
       
       
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Park Finder</ProjectsH2>
          <ProjectsP>
            National Park API finder.
          </ProjectsP>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/dubootcampProjectOne' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://tmessall.github.io/dubootcampProjectOne/' target='_blank' aria-label='CodePen'>
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
