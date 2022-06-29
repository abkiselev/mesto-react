function Main() {

    function handleEditAvatarClick() {
        document.querySelector('#edit-avatar-popup').classList.toggle('popup_active')
    }

    function handleEditProfileClick() {
        document.querySelector('#edit-profile-popup').classList.toggle('popup_active')
    }

    function handleAddPlaceClick() {
        document.querySelector('#add-foto-popup').classList.toggle('popup_active')
    }


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar" onClick={handleEditAvatarClick}>               
                        <img className="profile__img" src="./images/profile_img.jpg'" alt="Фото"/>       
                    </div>
                    
                        <div className="profile__info">
                            <div className="profile__title">
                                <h1 className="profile__name">Жак-Ив Кусто</h1>
                                <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
                            </div>
                            <p className="profile__description">Исследователь океана</p>
                        </div>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddPlaceClick}></button>
            </section>
                <section>
                    <ul className="cards">

                    </ul>
                </section>
        </main>
    );
}

export default Main;
