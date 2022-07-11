import React, { useState, useEffect } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser]); 

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateUser({
          name,
          about: description,
        });
    } 


    return (
        <PopupWithForm
                    onSubmit={handleSubmit}
                    onClose={onClose}
                    isOpen={isOpen}
                    name='edit-profile'
                    title='Редактировать профиль'
                >       

                    <fieldset className="popup__inputs">

                        <input 
                        value={name}
                        onChange={handleNameChange}
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
                        value={description}
                        onChange={handleDescriptionChange}
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
    );
}

export default EditProfilePopup;
