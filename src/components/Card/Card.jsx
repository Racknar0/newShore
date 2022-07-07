import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GobalContext';

const sites = require.context('../../assets/img', true, /\.(png|jpe?g|svg)$/i);

const Card = ({ card }) => {

    /* declaration contexts */
    const { setDestinations } = useContext(GlobalContext);
    const { Text, price, image, destination } = card;

    return (
        <div
            className="card"
            onClick={() => {
                setDestinations(destination);
            }}
        >
            <img className="card__image" src={sites(`./${image}`)} alt="" />
            <p className="card__title">{Text}</p>
            <p className="card__price">Price ${price}</p>
            <div className="card__black"></div>
        </div>
    );
};

export default Card;
