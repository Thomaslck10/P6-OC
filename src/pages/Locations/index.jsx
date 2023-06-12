import ImageCarousel from '../../components/Carousel';
import Datas from '../../Datas.json';
import '../../styles/Locations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useParams, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import Collapse from '../../components/Collapse';

function Locations() {
  const idLocation = useParams('id').id;
  const dataCurrentLocation = Datas.filter((data) => data.id === idLocation);

  if (dataCurrentLocation.length === 0) {
    return <Navigate to="/404" />;
  }

  const name = dataCurrentLocation[0].host.name.split(' ');
  const description = dataCurrentLocation[0].description;
  const equipments = dataCurrentLocation[0].equipments;

  return (
    <div className="locations-div">
      <div className="location-carousel">
        <ImageCarousel images={dataCurrentLocation[0].pictures} />
      </div>
      <div className="grid-div">
        <div className="title-div">
          <h1 className="locations-title">{dataCurrentLocation[0].title}</h1>
          <h2 className="locations-location">
            {dataCurrentLocation[0].location}
          </h2>
          <div className="tags">
            {dataCurrentLocation[0].tags.map((tag, index) => {
              return (
                <h3 key={index} className="tag">
                  {tag}
                </h3>
              );
            })}
          </div>
        </div>
        <div className="host-div">
          <div className="host2-div">
            <img
              alt={name}
              className="host-img"
              src={dataCurrentLocation[0].host.picture}
            ></img>
            <h2>
              {name[0]}
              <br />
              {name[1]}
            </h2>
          </div>
          <div className="star-div">
            {[...Array(5)].map((x, index) => (
              <FontAwesomeIcon
                icon={faStar}
                className={
                  index < dataCurrentLocation[0].rating ? 'active' : ''
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className="collapse-location">
        <Collapse title={'Description'} content={description} />
        <Collapse title={'Équipements'} content={equipments} />
      </div>
    </div>
  );
}

export default Locations;
