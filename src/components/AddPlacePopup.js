import React, { useEffect, useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, submitButtonText }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    const [nameErrorMessage, setNameErrorMessage] = useState('');
    const [linkErrorMessage, setLinkErrorMessage] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isLinkValid, setIsLinkValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    function handleNameChange(e) {
        setName(e.target.value);
        e.target.validity.valid ? setNameErrorMessage('') : setNameErrorMessage(e.target.validationMessage);
        setIsNameValid(e.target.validity.valid)
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
        e.target.validity.valid ? setLinkErrorMessage('') : setLinkErrorMessage(e.target.validationMessage);
        setIsLinkValid(e.target.validity.valid)
    }

    useEffect(() => {
        if(isNameValid && isLinkValid) {
            setIsFormValid(true)
        }
        else {
            setIsFormValid(false)
        }
    }, [isNameValid, isLinkValid])


    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({ name, link });

        setName('');
        setLink('');
        setNameErrorMessage('');
        setLinkErrorMessage('');
        setIsFormValid(false);
    } 

    function handleClosePopup() {
        onClose()

        setName('');
        setLink('');
        setNameErrorMessage('');
        setLinkErrorMessage('');
        setIsFormValid(false);
    } 


    return (
        <PopupWithForm
                    onSubmit={handleSubmit}
                    onClose={handleClosePopup}
                    isOpen={isOpen}
                    name='add-card'
                    title='Новое место'
                    submitButtonText={submitButtonText}
                    isFormValid={isFormValid}
                >       
                    
                <fieldset className="popup__inputs">
                    <input 
                    value={name}
                    onChange={handleNameChange}
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
                    <p className="popup__error edit-foto-name-error">{nameErrorMessage}</p>

                    <input 
                    value={link}
                    onChange={handleLinkChange}
                    name="link"
                    id="edit-foto-url"
                    className="popup__input popup__input_type_mesto-url" 
                    type="url" 
                    placeholder="Ссылка на картинку" 
                    noValidate
                    required
                    />
                    <p className="popup__error edit-foto-url-error">{linkErrorMessage}</p>
                </fieldset>
                        
        </PopupWithForm>
    );
}

export default AddPlacePopup;
