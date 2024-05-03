import React from 'react'
import './MenuStyled'
import { MenuHeading, MenuContainer } from './MenuStyled'
import  menuItems  from '../../constants/menuItems'




const Menu = () => {
  return (
    <section id="food-menu">
        <MenuHeading>Food Menu</MenuHeading>
        <MenuContainer>
                {menuItems.map((item, index) => (
                    <div class="food-menu-item" key={index}>
                        <div class="food-img">
                            <img src={item.image} alt="error" />
                        </div>
                        <div class="food-description">
                            <h2 class="food-title">{item.title}</h2>
                            <p>
                                {item.description}
                            </p>
                            <p class="food-price">{item.price}</p>
                        </div>  
                    </div>    
                ))}
            
        </MenuContainer>
    </section>
  )
}

export default Menu;