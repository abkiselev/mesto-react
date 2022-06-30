import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
// import api from '../utils/Api';

function App() {

    const [isEditProfilePopupOpen, setEditPopupState] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupState] = React.useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupState] = React.useState(false);
    

    function handleEditProfileClick() {
        setEditPopupState(!isEditProfilePopupOpen)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupState(!isAddPlacePopupOpen)
    }

    function handleEditAvatarClick() {        
        setEditAvatarPopupState(!isEditAvatarPopupOpen)
    }

    

    function closeAllPopups() {
        isEditProfilePopupOpen && handleEditProfileClick()
        isAddPlacePopupOpen && handleAddPlaceClick()
        isEditAvatarPopupOpen && handleEditAvatarClick()        
    }



    return (
        <div className="container">
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
            <Footer />



            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isEditProfilePopupOpen}
                name={'edit-profile'}
                title={'Редактировать профиль'}
                   
                children = {
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
                        }
                />

            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isAddPlacePopupOpen}
                name={'add-card'}
                title={'Новое место'}
                   
                children = {
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
                        }
                />

            <PopupWithForm
                onClose={closeAllPopups}
                isOpen={isEditAvatarPopupOpen}
                name={'edit-avatar'}
                title={'Обновить аватар'}
                   
                children = {
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
                        }
                />

                
            
            <ImagePopup />
            
            

            <template id="card-template">
                <li className="card">
                    <img className="card__img" src="#" alt="Фото" />
                    <div className="card__heading">
                        <h2 className="card__title"></h2>
                        <div>
                            <button className="card__like-button" type="button"></button>
                            <p className="card__like-counter">0</p>
                        </div>
                        
                    </div>
                    <button className="card__trash-button" type="button"></button>
                </li>
            </template>

        </div>
    );
}

export default App;
