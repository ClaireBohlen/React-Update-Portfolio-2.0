import styled from "styled-components"

export const AboutContainer = styled.div `
color:#fff;
background: ${({lightBg}) => (lightBg ? " #f9f9f9" : "010606")};

@media screen and (max-width: 768px){
    padding: 100px 0;
}
@media screen and (max-width: 768px) {
    height: 1800px;
    
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
  }
`

export const AboutWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;



`

export const AboutRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `"col2 col1"` : `"col1 col2"`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `"col1 "col2`:`"col1 col1" "col2 col2"`)}
    }

`

export const Colum1 = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    margin-top: -50px;

    @media screen and (max-width: 768px){
        margin-top: 0;
        
    }


`
export const IconStyle = styled.a`
      color: #000000;
      font-size: 25px;
      padding-right: 5px;
      
      
      &:hover{
      color: #F9A826;
      transition: 0.3s ease-out;

        }
`;

export const Colum2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    margin-top: -110px;
`

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 20px;
    padding-bottom: 60px;
    
`

export const TopLine = styled.p `
    color: #F9A826;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const IconList = styled.li ` 
    margin: 0 0 3px 0;
`
export const SiReact = styled.img ` 
    margin: 0 0 100px 0;
`

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 16px;
    line-height: 1.1;
    font-weight: 600;
    color: black;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const SubTitle = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 12px;
    line-height: 24px;
    color: ${({darkText})=> (darkText ? "#fff":"#010606")};


`
export const SubTitle2 = styled.p `
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 12px;
    line-height: 24px;
    color: ${({darkText})=> (darkText ? "#fff":"#010606")};


`


export const BtnWrap = styled.div `
    display:flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div `
    max-width: 300px;
    height: 100%;
`

export const Img = styled.img ` 
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
`

