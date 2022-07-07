import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GobalContext';

import Card from '../Card/Card';
import './Main.css';

const Main = () => {
    const { cards, destinations } = useContext(GlobalContext);

    return (
        <main className="main">
            <div className="main__menu--mobile">
                <p className="main__menu--mobile__title">Menu</p>
                <div className="main__menu--mobile__SContainer">
                    <i className="bi bi-caret-right-fill"></i>
                    <p className="main__menu--mobile__text">Check-in</p>
                </div>
                <div className="main__menu--mobile__SContainer">
                    <i className="bi bi-caret-right-fill"></i>
                    <p className="main__menu--mobile__text">
                        Manage My Booking
                    </p>
                </div>
                <div className="main__menu--mobile__SContainer">
                    <i className="bi bi-caret-right-fill"></i>
                    <p className="main__menu--mobile__text">Search</p>
                </div>
                <div className="main__menu--mobile__SContainer">
                    <i className="bi bi-caret-right-fill"></i>
                    <p className="main__menu--mobile__text">Destinations</p>
                </div>
                <div className="main__menu--mobile__SContainer">
                    <i className="bi bi-caret-right-fill"></i>
                    <p className="main__menu--mobile__text">Members</p>
                </div>
            </div>

            <div className="main__container">
                <p className="main__title">Offers</p>

                <div className="card__container">
                    {cards.map((card) => (
                        <Card
                            key={card.id}
                            card={card} /*  setDestinations={setDestinations} */
                        />
                    ))}
                </div>
                <div className="main__menu">
                    <p className="main__menu__title">Menu</p>
                    <div className="main__menu--mobile__SContainer">
                        <i className="bi bi-caret-right-fill"></i>
                        <p className="main__menu--mobile__text">Check-in</p>
                    </div>
                    <div className="main__menu--mobile__SContainer">
                        <i className="bi bi-caret-right-fill"></i>
                        <p className="main__menu--mobile__text">
                            Manage My Booking
                        </p>
                    </div>
                    <div className="main__menu--mobile__SContainer">
                        <i className="bi bi-caret-right-fill"></i>
                        <p className="main__menu--mobile__text">Search</p>
                    </div>
                    <div className="main__menu--mobile__SContainer">
                        <i className="bi bi-caret-right-fill"></i>
                        <p className="main__menu--mobile__text">Destinations</p>
                    </div>
                    <div className="main__menu--mobile__SContainer">
                        <i className="bi bi-caret-right-fill"></i>
                        <p className="main__menu--mobile__text">Members</p>
                    </div>
                </div>
                <div className="destination">
                    <p className="destination__text">{destinations}</p>
                    <p className="destination__label">Chosen Destination</p>
                </div>
            </div>
        </main>
    );
};

export default Main;
