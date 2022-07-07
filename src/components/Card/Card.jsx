import moscow from '../../assets/img/moscow.jpg';
import honduras from '../../assets/img/honduras.jpg';
import puerto from '../../assets/img/puerto-rico.jpg';


const Card = () => {


    
  return (
    <div className="card">
      <img className='card__image' src={moscow} alt="" />
      <p className='card__title'>Trip to moscow</p>
      <p className='card__price'>Price $600,86</p>
      <div className='card__black'></div>
    </div>
  )
}

export default Card
