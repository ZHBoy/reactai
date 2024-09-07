// Card.js
import React from 'react';
import './Card.css'; // 引入CSS样式

const Card = ({id, title, description, backgroundImage, url}) => {
    return (
        <div className="card-container">

            <div className="card-title">
                <img src={backgroundImage} alt=""/>
                <h2>{title}</h2>
            </div>
            <div>
                <p className="card-description">{description}</p>
            </div>

            <div className="hover-button-container">
                <button className="hover-button">去看看</button>
            </div>
        </div>
    );
};

export default Card;