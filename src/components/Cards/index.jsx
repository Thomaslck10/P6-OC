import { Link } from 'react-router-dom';

function Cards({ location, id }) {
  return (
    <Link className="link-div" to={`/Locations/${id}`}>
      <img src={location.cover} alt={location.title} className="img-cards" />
      <h2 className="title-cards">{location.title}</h2>
    </Link>
  );
}

export default Cards;
