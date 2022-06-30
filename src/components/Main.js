import React from 'react';
import api from '../utils/Api';

function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');

    const [cards, setInitialCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfileInfo()
        .then(res =>{
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
    }, [])

    React.useEffect(() => {
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

                {cards.map((card, i) => (

                        <li className="card" key={i}>
                            <img className="card__img" src={card.link} alt={card.name} />
                            <div className="card__heading">
                                <h2 className="card__title">{card.name}</h2>
                                <div>
                                    <button className="card__like-button" type="button"></button>
                                    <p className="card__like-counter">{card.likes.length}</p>
                                </div>
                                
                            </div>
                            <button className="card__trash-button" type="button"></button>
                        </li>

                ))}


                </ul>
            </section>
        </main>
    );
}

export default Main;
