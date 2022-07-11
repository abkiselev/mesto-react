import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
    const [currentUser, setCurrentUser] = useState([]);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const [selectedCard, setSelectedCard] = useState({});
    const [isCardPopupOpen, setIsCardPopupOpenState] = useState(false);

    const [cards, setInitialCards] = useState([]);

    useEffect(() => {
        api.getInitialCards()
        .then(res =>{
            setInitialCards(res)
        })
    }, [cards])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.setCardLike(card._id, !isLiked ? 'PUT' : 'DELETE').then((newCard) => {
            setInitialCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    } 

    function handleCardDelete(card) {    
        api.deleteCard(card._id)
            .then((res) => {
                setInitialCards((newCards) => newCards.filter((c) => c._id !== card._id));
            });
    } 

    function handleAddPlaceSubmit({name, link}) {
        api.createNewCard({name, link})
            .then(res => setInitialCards([...cards, res]))

        closeAllPopups()
    }

    useEffect(() => {
        api.getProfileInfo()
            .then(res => setCurrentUser(res))
    }, [])

    
    function handleUpdateUser({name, about}) {
        api.changeProfileInfo({name, about})
            .then(res => setCurrentUser(res));

        closeAllPopups()
    }

    function handleUpdateAvatar({avatar}) {
        api.changeProfileAvatar({avatar})
            .then(res => setCurrentUser(res));

        closeAllPopups()
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function handleEditAvatarClick() {        
        setIsEditAvatarPopupOpen(true)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
        setIsCardPopupOpenState(true)
    }

    function closeAllPopups() {
        isEditProfilePopupOpen && setIsEditProfilePopupOpen(false)
        isAddPlacePopupOpen && setIsAddPlacePopupOpen(false)
        isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false) 

        if(isCardPopupOpen){
            setIsCardPopupOpenState(false)
            setSelectedCard({}) 
        }
        
    }


    return (
        <div className="container">
            <CurrentUserContext.Provider value={currentUser}>
                <Header />

                <Main
                    cards={cards}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />

                <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>                 

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

                <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

                    
                <ImagePopup
                    selectedCard={selectedCard}
                    isOpen={isCardPopupOpen}
                    onClose={closeAllPopups}
                />

            </CurrentUserContext.Provider>
        </div>
    );
}

export default App;
