import React, { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {  
    const inputRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({ avatar: inputRef.current.value });
    }


    return (
        <PopupWithForm
                    onSubmit={handleSubmit}
                    onClose={onClose}
                    isOpen={isOpen}
                    name='edit-avatar'
                    title='Обновить аватар'
                >       
                    
                    <fieldset className="popup__inputs">
                        <input 
                        ref={inputRef}
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
    );
}

export default EditAvatarPopup;
