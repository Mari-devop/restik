import React from 'react'
import './AboutStyled'
import { AboutComponent, AboutWrapper, AboutText } from './AboutStyled'
import Team from '../Team/Team'
import fruitImage from '../../images/fruit.jpeg'

const About = () => {
  return (
    <AboutComponent>
        <AboutWrapper>
            <AboutText>
                <p class="small">About Us</p>
                <h2>Discover Our Journey: Crafting Healthful Delights for a Decade</h2>
                <p>
                    For the past decade, we've dedicated ourselves to 
                    crafting nutritious and delicious meals that nourish 
                    both body and soul. With a passion for wellness and a 
                    commitment to quality ingredients, we've been on a mission 
                    to make healthy eating accessible and enjoyable for all.
                </p>
            </AboutText>
            <div class="about-img">
                <img src={fruitImage} alt="food" />
            </div>
        </AboutWrapper>
        <Team />
    </AboutComponent>

  
  )
}

export default About;