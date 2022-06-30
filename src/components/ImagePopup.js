function ImagePopup() {
    return (
        <>
            <section id="foto-popup" className="popup popup_type_foto-popup">
                <div className="popup__foto">
                    <img className="popup__img" src="#" alt="Фото" />
                    <h2 className="popup__text">Фото</h2>
                    <button className="popup__close" type="button"></button>
                </div>
                <div className="popup__bg"></div>
            </section>
        </>
    );
}

export default ImagePopup;
