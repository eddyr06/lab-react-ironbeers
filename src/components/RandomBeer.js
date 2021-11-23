import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RandomBeer = () => {
  const [beer, setBeer] = React.useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((info) => {
        setBeer(info.data);
      })
      .catch((err) => {
        console.log('something is wrong', err);
      });
  }, []);

  console.log(beer);

  return (
    <div>
      <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
      </header>
      <img src={beer.image} alt={beer.name} />
      <div className="beer-section1">
        <p>{beer.name}</p>
        <p>{beer.attenuation_level}</p>
      </div>
      <div className="beer-section2">
        <p>{beer.tagline}</p>
        <p>{beer.first_brewed}</p>
      </div>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
    </div>
  );
};

export default RandomBeer;
