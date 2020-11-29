import React from "react";
import Front from "../assests/images/front-end.svg";
import Back from "../assests/images/backend.svg";
import Design from "../assests/images/design.svg";


function About (){
    return(
        <div>
            
                <div id="about" class="block">   
                    <div id="about">
                        
                        <div class ="row background-color-about"></div>
                        
                        <div class="col s12  aboutme-col">
                        
                        <p> <span class="enlarge"> about me: </span>  My name is Claire and I live in Denver, Colorado. I’m currently enrolled in a coding bootcamp and I recently graduated from the University of Colorado with a bachelor’s degree in Business & Music. I love to play the piano and hike in the Rocky Mountains.</p>
                        
                        </div>

                        <div class="row">
                        <div class="col s1"></div>
                        
                        <div class="col s11 m3 about-col-front">
                            <p> 
                            <img src={Front} alt="div-tag"/>
                            </p>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                            
                        </div>
                        <div class="col s11 m3 about-col-back">
                                
                            <p>
                            <img src= {Back} alt="curly brackets"/>
                            </p>
                            <p>Lorem ipsum dolor sit.</p>
                        </div>
                        <div class="col s11 m3 about-col-desgin">
                                
                            <p>
                            <img src= {Design} alt="paintbrush icon for design"/>
                            </p>
                            
                            <p>I've always had a creative side when it comes to developing projects. As a photographer, </p>
                        
                        </div>
                        <div class="col s1"></div>
                    
                        </div>
                        
                    </div>
                </div> 



    </div>
    )
}
export default About;









