import { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/Api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
    const [currentUser, setCurrentUser] = useState([]);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

    const [selectedCard, setSelectedCard] = useState({});
    const [isCardPopupOpen, setIsCardPopupOpenState] = useState(false);

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
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    onCardClick={handleCardClick}
                />

                <Footer />

                <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/> 

                <PopupWithForm
                    onClose={closeAllPopups}
                    isOpen={isAddPlacePopupOpen}
                    name='add-card'
                    title='Новое место'
                >       
                    
                    <fieldset className="popup__inputs">
                        <input 
                        name="name"
                        id="edit-foto-name"
                        className="popup__input popup__input_type_mesto-name" 
                        type="text" 
                        placeholder="Название" 
                        minLength="2"
                        maxLength="30"
                        noValidate
                        required
                        />
                        <p className="popup__error edit-foto-name-error"></p>
                        <input 
                        name="link"
                        id="edit-foto-url"
                        className="popup__input popup__input_type_mesto-url" 
                        type="url" 
                        placeholder="Ссылка на картинку" 
                        noValidate
                        required
                        />
                        <p className="popup__error edit-foto-url-error"></p>
                    </fieldset>
                        
                </PopupWithForm>

                <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

                    
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
