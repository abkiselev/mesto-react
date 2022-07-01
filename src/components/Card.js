function Card(props) {
    
    function handleCardClick(){
        props.onCardClick(props.card)
    }

    return (
        <li className="card">
            <img className="card__img" src={props.card.link} alt={props.card.name} onClick={handleCardClick}/>
            <div className="card__heading">
                <h2 className="card__title">{props.card.name}</h2>
                <div>
                    <button className="card__like-button" type="button"></button>
                    <p className="card__like-counter">{props.card.likes.length}</p>
                </div>
                
            </div>
            <button className="card__trash-button" type="button"></button>
        </li>
    );
}

export default Card;
