function ImagePopup(props) {
    
    return (
            <section id="foto-popup" className={`popup popup_type_foto-popup ${props.isOpen && 'popup_active'}`}>
                <div className="popup__foto">
                    <img className="popup__img" src={props.selectedCard.link} alt={props.selectedCard.name} />
                    <h2 className="popup__text">{props.selectedCard.name}</h2>
                    <button className="popup__close" type="button" onClick={props.onClose}></button>
                </div>
                <div className="popup__bg" onClick={props.onClose}></div>
            </section>
    );
}

export default ImagePopup;
