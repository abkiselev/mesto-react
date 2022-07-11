import React, { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setInitialCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
        .then(res =>{
            setInitialCards(res)
        })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.setCardLike(card._id, !isLiked ? 'PUT' : 'DELETE').then((newCard) => {
            setInitialCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    } 


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__img" src={currentUser.avatar} alt="Фото"/>       
                    </div>
                    
                        <div className="profile__info">
                            <div className="profile__title">
                                <h1 className="profile__name">{currentUser.name}</h1>
                                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                            </div>
                            <p className="profile__description">{currentUser.about}</p>
                        </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section>
                <ul className="cards">

                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} onCardLike={handleCardLike}/>
                    ))}

                </ul>
            </section>
        </main>
    );
}

export default Main;
