import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

function App() {
  return (
    <div className="container">
        <Header />
        <Main />
        <Footer />
        <PopupWithForm />

        
        <section id="foto-popup" className="popup popup_type_foto-popup">
                <div className="popup__foto">
                    <img className="popup__img" src="#" alt="Фото" />
                    <h2 className="popup__text">Фото</h2>
                    <button className="popup__close" type="button"></button>
                </div>
                <div className="popup__bg"></div>
        </section>

        <template id="card-template">
            <li className="card">
                <img className="card__img" src="#" alt="Фото" />
                <div className="card__heading">
                    <h2 className="card__title"></h2>
                    <div>
                        <button className="card__like-button" type="button"></button>
                        <p className="card__like-counter">0</p>
                    </div>
                    
                </div>
                <button className="card__trash-button" type="button"></button>
            </li>
        </template>

    </div>
  );
}

export default App;
