import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1800px;
    
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;
  margin-top: -250px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    margin-bottom: -220px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;


export const DeployLinkIcon1 = styled.a`
      color: #000000;
      font-size: 20px;
      padding-right: 24px;
      padding-top: 10px;
      
      
      
      &:hover{
      color: #F9A826;
      transition: 0.3s ease-out;

        }
`;
export const DeployLinkIcon2 = styled.a`
      color: #000000;
      font-size: 20px;
      /* margin-left: -94px; */
      
      
      &:hover{
      color: #F9A826;
      transition: 0.3s ease-out;

        }
`;




export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  
`;

export const ProjectsIcon = styled.img`
  height: 120px;
  width: 120px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;
export const ProjectsP2 = styled.p`
  font-size: 0.5rem;
  text-align: center;
`;



export const ProjectBtnLink = styled.div `
  color: black;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;

    }
`
export const ProjectsSecondP = styled.p ` 
    margin-bottom: -20px;
    justify-content: space-between;
    padding-top:10px;


`
