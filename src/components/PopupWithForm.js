function PopupWithForm() {
    return (
        <>
            <section id="edit-profile-popup" className="popup popup_type_edit-profile">
                <div className="popup__container">
                    <h2 className="popup__title">
                        Редактировать профиль
                    </h2>
                    <form name="edit-profile" className="edit-profile popup__form" novalidate>
                        <fieldset className="popup__inputs">
                            <input 
                            name="name"
                            id="edit-profile-name"
                            className="popup__input popup__input_type_name" 
                            type="text" 
                            value="" 
                            minlength="2"
                            maxlength="40"
                            novalidate
                            required
                            />
                            <p className="popup__error edit-profile-name-error"></p>
                            <input 
                            name="about"
                            id="edit-profile-bio"
                            className="popup__input popup__input_type_descr" 
                            type="text" 
                            value="" 
                            minlength="2"
                            maxlength="200"
                            novalidate
                            required
                            />
                            <p className="popup__error edit-profile-bio-error"></p>
                        </fieldset>
                        <button type="submit" className="popup__button">Сохранить</button>
                    </form>
                    <button className="popup__close" type="button"></button>
                </div>
                <div className="popup__bg"></div>
            </section>



            <section id="add-foto-popup" className="popup popup_type_add-card">
                <div className="popup__container">
                    <h2 className="popup__title">
                        Новое место
                    </h2>
                    <form name="add-card" className="add-foto add-card popup__form" novalidate>
                        <fieldset className="popup__inputs">
                            <input 
                            name="name"
                            id="edit-foto-name"
                            className="popup__input popup__input_type_mesto-name" 
                            type="text" 
                            value="" 
                            placeholder="Название" 
                            minlength="2"
                            maxlength="30"
                            novalidate
                            required
                            />
                            <p className="popup__error edit-foto-name-error"></p>
                            <input 
                            name="link"
                            id="edit-foto-url"
                            className="popup__input popup__input_type_mesto-url" 
                            type="url" 
                            value="" 
                            placeholder="Ссылка на картинку" 
                            novalidate
                            required
                            />
                            <p className="popup__error edit-foto-url-error"></p>
                        </fieldset>
                        <button type="submit" className="popup__button popup__add-button">Создать</button>
                    </form>
                    <button className="popup__close" type="button"></button>
                </div>
                <div className="popup__bg"></div>
            </section>

            

            <section id="delete-card-popup" className="popup popup_type_delete-card">
                <div className="popup__container">
                    <h2 className="popup__title">
                        Вы уверены?
                    </h2>
                    <form name="delete-card" className="delete-card popup__form" novalidate>
                        <button type="submit" className="popup__button popup__delete-card-button">Да</button>
                    </form>
                    <button className="popup__close" type="button"></button>
                </div>
                <div className="popup__bg"></div>
            </section>



            <section id="edit-avatar-popup" className="popup popup_type_edit-avatar">
                <div className="popup__container">
                    <h2 className="popup__title">
                        Обновить аватар
                    </h2>
                    <form name="add-card" className="edit-avatar popup__form" novalidate>
                        <fieldset className="popup__inputs">
                            <input 
                            name="avatar"
                            id="edit-avatar-url"
                            className="popup__input popup__input_type_mesto-url" 
                            type="url" 
                            value="" 
                            placeholder="Ссылка на картинку" 
                            novalidate
                            required
                            />
                            <p className="popup__error edit-avatar-url-error"></p>
                        </fieldset>
                        <button type="submit" className="popup__button popup__add-button">Сохранить</button>
                    </form>
                    <button className="popup__close" type="button"></button>
                </div>
                <div className="popup__bg"></div>
            </section>
        </>
    );
}

export default PopupWithForm;














