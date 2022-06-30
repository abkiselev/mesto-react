function Main(props) {
    


    return (
        <main className="main">
            <section className="profile">
                <div className="profile__card">
                    <div className="profile__avatar" onClick={props.onEditAvatar}>
                        <img className="profile__img" src="./images/profile_img.jpg'" alt="Фото"/>       
                    </div>
                    
                        <div className="profile__info">
                            <div className="profile__title">
                                <h1 className="profile__name">Жак-Ив Кусто</h1>
                                <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
                            </div>
                            <p className="profile__description">Исследователь океана</p>
                        </div>
                </div>
                <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
            </section>

            <section>
                <ul className="cards">

                </ul>
            </section>
        </main>
    );
}

export default Main;
