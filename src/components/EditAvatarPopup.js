import React, { useEffect, useState, useRef } from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, submitButtonText }) {  
    const inputRef = useRef();    

    const [linkErrorMessage, setLinkErrorMessage] = useState('');
    const [isLinkValid, setIsLinkValid] = useState(false);
    const [isFormValid, setIsFormValid] = useState(false);

    function handleLinkChange() {
        inputRef.current.validity.valid ? setLinkErrorMessage('') : setLinkErrorMessage(inputRef.current.validationMessage);
        setIsLinkValid(inputRef.current.validity.valid)
    }

    useEffect(() => {
        if(isLinkValid) {
            setIsFormValid(true)
        }
        else {
            setIsFormValid(false)
        }
    }, [isLinkValid])


    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({ avatar: inputRef.current.value });
        handleClosePopup();
    }

    function handleClosePopup() {
        onClose()
        
        inputRef.current.value = '';
        setLinkErrorMessage('');
        setIsFormValid(false)
    } 


    return (
        <PopupWithForm
                    onSubmit={handleSubmit}
                    onClose={handleClosePopup}
                    isOpen={isOpen}
                    name='edit-avatar'
                    title='Обновить аватар'
                    submitButtonText={submitButtonText}
                    isFormValid={isFormValid}
                >       
                    
                    <fieldset className="popup__inputs">
                        <input 
                        ref={inputRef}
                        onChange={handleLinkChange}
                        name="avatar"
                        id="edit-avatar-url"
                        className="popup__input popup__input_type_mesto-url" 
                        type="url" 
                        placeholder="Ссылка на картинку" 
                        noValidate
                        required
                        />
                        <p className="popup__error edit-avatar-url-error">{linkErrorMessage}</p>
                    </fieldset>
                
                </PopupWithForm>
    );
}

export default EditAvatarPopup;
