import React from 'react';
import Icon1 from '../../images/svg-8.svg';
import Icon2 from '../../images/svg-9.svg';
import Icon3 from '../../images/svg-10.svg';
import Icon4 from '../../images/svg-11.svg';
import Icon6 from '../../images/svg-13.svg';
import Icon7 from '../../images/svg-14.svg';


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
  ProjectsP2,
  DeployLinkIcon1,
  DeployLinkIcon2,
  ProjectsSecondP,
  
  
} from './ProjectsElements';

const Projects = () => {
  return (
    <ProjectsContainer id='Projects'>
      <ProjectsH1></ProjectsH1>
      <ProjectsWrapper>
        
        {/* Hotel Motel Project Card 1 */}
        <ProjectsCard >
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>Hotel Motel</ProjectsH2>
          <ProjectsP>
            Full stack hotel property management system.
          </ProjectsP>
          <ProjectsP2>
            JavaScript, NodeJs, MySQL, Express, RESTful API's.
          </ProjectsP2>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/hotel_motel' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://hotelmotel.herokuapp.com/' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>


        {/* Shake It Up  */}
        <ProjectsCard>
          <ProjectsIcon src={Icon6} />
          <ProjectsH2>Shake It Up</ProjectsH2>
          <ProjectsP>
            Mern Stack Activity Generator.
          </ProjectsP>
          <ProjectsP2>
            React, NodeJs, MongoDB, Express, Mongoose.
          </ProjectsP2>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/MasonJar' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://shake-it-up.herokuapp.com/' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
        
        
        {/* Fitness Tracker Project Card 3 */}
        <ProjectsCard>
          <ProjectsIcon src={Icon2} />
          <ProjectsH2>Fitness Tracker</ProjectsH2>
          <ProjectsP>
            Full stack workout tracker App.
          </ProjectsP>
          <ProjectsP2>
          JavaScript, Node.js, MongoDB, Express, CSS.
          </ProjectsP2>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/fitnessTracker' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://fierce-spire-72446.herokuapp.com/?id=5fc117b061854600170605f9' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
       
       
       {/* API Park Finder Project Card 4 */}
        <ProjectsCard>
          <ProjectsIcon src={Icon3} />
          <ProjectsH2>Park Finder</ProjectsH2>
          <ProjectsP>
            Server-Side API National Park Finder.
          </ProjectsP>
          <ProjectsP2>
            JavaScript, CSS, HTML, National Park API.
          </ProjectsP2>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/dubootcampProjectOne' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://tmessall.github.io/dubootcampProjectOne/' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
       </ProjectsCard>
        
        
        {/* Budget Tracker PWA Project Card 5 */}
        <ProjectsCard>
          <ProjectsIcon src={Icon4} />
          <ProjectsH2>Budget Tracker</ProjectsH2>
          <ProjectsP>
            Full Stack Progressive Web Budget Tracking App.
          </ProjectsP>
          <ProjectsP2>
           JavaScript, Node.js, Express, MongoDB, Mongoose. 
          </ProjectsP2>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/online-offline-budget-tracker-PWA' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://budget-tracker-pwa-20.herokuapp.com/' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
        
        

        
       
        
        

        {/* Front End Javascript Calculator Project Card 6 */}
        <ProjectsCard>
          <ProjectsIcon src={Icon7} />
          <ProjectsH2>Note Taker</ProjectsH2>
          <ProjectsP>
            Full Stack CRUD Online Note Taking Application.
          </ProjectsP>
          <ProjectsP2>
            JavaScript, Node.js, Express, CSS, HTML, JSON.
          </ProjectsP2>
          <ProjectsSecondP>
            <DeployLinkIcon1 href='https://github.com/ClaireBohlen/noteTaker' target='_blank' aria-label='CodePen'>
              <FaGithub/> 
            </DeployLinkIcon1>
            <DeployLinkIcon2 href='https://fathomless-springs-57799.herokuapp.com/' target='_blank' aria-label='CodePen'>
              <FaRocket/> 
            </DeployLinkIcon2>
          </ProjectsSecondP>
        </ProjectsCard>
      
      
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
