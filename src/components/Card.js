import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike}) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;

    const isLiked = card.likes.some(i => i._id === currentUser._id);

    const cardLikeButtonClassName = (
        `card__like-button ${isLiked && 'card__like-button_active'}`
    ); 

    const cardDeleteButtonClassName = (
        `card__trash-button ${!isOwn && 'card__trash-button_no-active'}`
    ); 

    function handleCardClick(){
        onCardClick(card)
    }

    function handleLikeClick(){
        onCardLike(card)
    }

    return (
        <li className="card">
            <img className="card__img" src={card.link} alt={card.name} onClick={handleCardClick}/>
            <div className="card__heading">
                <h2 className="card__title">{card.name}</h2>
                <div>
                    <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
                
            </div>
            <button className={cardDeleteButtonClassName} type="button"></button>
        </li>
    );
}

export default Card;
