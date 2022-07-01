import { useState, useEffect } from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');

    const [cards, setInitialCards] = useState([]);

    useEffect(() => {
        api.getProfileInfo()
        .then(res =>{
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
    }, [])

    useEffect(() => {
        api.getInitialCards()
        .then(res =>{
            setInitialCards(res)
        })
    }, [])


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__img" src={userAvatar} alt="Фото"/>       
                    </div>
                    
                        <div className="profile__info">
                            <div className="profile__title">
                                <h1 className="profile__name">{userName}</h1>
                                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                            </div>
                            <p className="profile__description">{userDescription}</p>
                        </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section>
                <ul className="cards">

                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                    ))}

                </ul>
            </section>
        </main>
    );
}

export default Main;
