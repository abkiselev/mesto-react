import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

    const [isEditProfilePopupOpen, setEditPopupState] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupState] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupState] = useState(false);

    const [selectedCard, setSelectedCard] = useState({});
    const [isCardPopupOpen, setCardPopupState] = useState(false);
    

    function handleEditProfileClick() {
        setEditPopupState(!isEditProfilePopupOpen)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupState(!isAddPlacePopupOpen)
    }

    function handleEditAvatarClick() {        
        setEditAvatarPopupState(!isEditAvatarPopupOpen)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
        setCardPopupState(!isCardPopupOpen)
    }

    function closeAllPopups() {
        isEditProfilePopupOpen && handleEditProfileClick()
        isAddPlacePopupOpen && handleAddPlaceClick()
        isEditAvatarPopupOpen && handleEditAvatarClick() 

        if(isCardPopupOpen){
            setCardPopupState(!isCardPopupOpen)
            setSelectedCard({}) 
        }
        
    }


    return (
        <div className="container">

            <Header />

            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />

            <Footer />

            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
                name={'edit-profile'}
                title={'Редактировать профиль'}
            >       

                <fieldset className="popup__inputs">

                    <input 
                    name="name"
                    id="edit-profile-name"
                    className="popup__input popup__input_type_name" 
                    type="text" 
                    minLength="2"
                    maxLength="40"
                    noValidate
                    required
                    />
                    <p className="popup__error edit-profile-name-error"></p>

                    <input 
                    name="about"
                    id="edit-profile-bio"
                    className="popup__input popup__input_type_descr" 
                    type="text" 
                    minLength="2"
                    maxLength="200"
                    noValidate
                    required
                    />
                    <p className="popup__error edit-profile-bio-error"></p>

                </fieldset>

            </PopupWithForm>

            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
                name={'add-card'}
                title={'Новое место'}
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

            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
                name={'edit-avatar'}
                title={'Обновить аватар'}
            >       
                
                <fieldset className="popup__inputs">
                    <input 
                    name="avatar"
                    id="edit-avatar-url"
                    className="popup__input popup__input_type_mesto-url" 
                    type="url" 
                    placeholder="Ссылка на картинку" 
                    noValidate
                    required
                    />
                    <p className="popup__error edit-avatar-url-error"></p>
                </fieldset>
            
            </PopupWithForm>

                
            <ImagePopup
                selectedCard={selectedCard}
                isOpen={isCardPopupOpen}
                onClose={closeAllPopups}
            />

        </div>
    );
}

export default App;
