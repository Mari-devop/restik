import React, { useState } from 'react';
import './CategoryStyled';
import { CategoryComponent } from './CategoryStyled';
import { categoryList } from '../../constants/categoryList';
import Popup from '../Popup/Popup';

const Category = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const togglePopup = (id) => {
        setShowPopup(!showPopup);
        setSelectedCategory(id);
    };

    return (
        <CategoryComponent>
            <h2>Types of food we use in cooking</h2>
            <div className="food-container container">
                {categoryList.map((item) => (
                    <div className="img-container" key={item.id} onClick={() => togglePopup(item.id)}>
                        <div className="food-type">
                            <img src={item.image} alt="error" />
                            <div className="img-content">
                                <h3>{item.title}</h3>
                                <button
                                    className="btn btn-primary"
                                    onClick={togglePopup}
                                >
                                    learn more
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {showPopup && <Popup id={selectedCategory} onClose={() => setShowPopup(false)} />}
        </CategoryComponent>
    );
};

export default Category;
