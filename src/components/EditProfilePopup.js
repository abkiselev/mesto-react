import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, submitButtonText }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isDescriptionValid, setIsDescriptionValid] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]); 


    function handleNameChange(e) {
        setName(e.target.value);
        e.target.validity.valid ? setNameErrorMessage('') : setNameErrorMessage(e.target.validationMessage);
        setIsNameValid(e.target.validity.valid)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
        e.target.validity.valid ? setDescriptionErrorMessage('') : setDescriptionErrorMessage(e.target.validationMessage);
        setIsDescriptionValid(e.target.validity.valid)
    }

    useEffect(() => {
        if(isNameValid && isDescriptionValid) {
            setIsFormValid(true)
        }
        else {
            setIsFormValid(false)
        }
    }, [isNameValid, isDescriptionValid])


    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateUser({ name, about: description });
    } 

    function handleClosePopup() {
        onClose()

        setName(currentUser.name);
        setDescription(currentUser.about);
        setNameErrorMessage('');
        setDescriptionErrorMessage('');
    } 


    return (
        <PopupWithForm
                    onSubmit={handleSubmit}
                    onClose={handleClosePopup}
                    isOpen={isOpen}
                    name='edit-profile'
                    title='Редактировать профиль'
                    submitButtonText={submitButtonText}
                    isFormValid={isFormValid}
                >       

                    <fieldset className="popup__inputs">

                        <input 
                        value={name ?? ""}
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
                        <p className="popup__error edit-profile-name-error">{nameErrorMessage}</p>

                        <input 
                        value={description ?? ""}
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
                        <p className="popup__error edit-profile-bio-error">{descriptionErrorMessage}</p>

                    </fieldset>

                </PopupWithForm>
    );
}

export default EditProfilePopup;
