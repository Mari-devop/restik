import React, { useState } from 'react';
import './PopupStyled';
import { categoryList } from '../../constants/categoryList';
import { PopupContainer } from './PopupStyled';

const Popup = ({ id, onClose }) => {
    const category = categoryList.find((category) => category.id === id);

    return (
        <PopupContainer>
            <div className='delete' onClick={onClose}>x</div>
            <div className='popup'>
                <h3>{category.title}</h3>
                <p>{category.type}</p>
            </div>
        </PopupContainer>
    );
};

export default Popup;
