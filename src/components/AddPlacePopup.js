import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        onAddPlace({ name, link });
    } 


    return (
        <PopupWithForm
                    onSubmit={handleSubmit}
                    onClose={onClose}
                    isOpen={isOpen}
                    name='add-card'
                    title='Новое место'
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
                    <p className="popup__error edit-foto-name-error"></p>

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
                    <p className="popup__error edit-foto-url-error"></p>
                </fieldset>
                        
        </PopupWithForm>
    );
}

export default AddPlacePopup;
