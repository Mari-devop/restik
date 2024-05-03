import React from 'react';
import { ShowcaseArea, ShowcaseContainer, Title, Description } from './HomeStyled';
import { homeList } from '../../constants/listItems';
import { Subscribe } from '../Subscribe';
import { Locations } from '../Locations';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ShowcaseArea>
        {homeList.map((item, index) => (
          <ShowcaseContainer key={index} theme={item.theme}>
            <div>
              <Title>{item.title}</Title>
              <Description>{item.description}</Description>
              
              <Link to="/menu" class="link-menu">{item.button}</Link>
            </div>
          </ShowcaseContainer>
        ))}
           
      </ShowcaseArea>
      <Locations />
      <Subscribe />
    </div>
  );
};

export default Home;
