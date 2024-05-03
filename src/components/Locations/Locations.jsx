import React from 'react'
import './LocationsStyled'
import  locationList  from '../../constants/locationList'
import { LocationHeader, LocationText } from './LocationsStyled'

const Locations = () => {
  return (
    <div>
        <LocationHeader>
            <h2>Find our restaurant at the prime location!</h2>
            <a href="#location-section" class="btn btn-primary">view all</a>
        </LocationHeader>
        
        <LocationText>
        <p>Our restaurant is located in the heart of the city. We have multiple locations in different cities. Find the nearest one and enjoy the delicious food.</p>
        <div class="location-container container">
            {locationList.map((item, index) =>
                <div class="img-containerr" id="location-section">
                    <div class="location" key={index}>
                        <img src={item.image} alt="error" />
                        <div class="location-content">
                            <h3>{item.title}</h3>
                            <p class="address">{item.address}</p>
                            <a href={item.link} class="btn btn-primary" target="blank">view
                                map</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </LocationText>
    </div>
  )
}

export default Locations