import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is Home</h1>
      <div className="homepage">
        <Link to="/">Home</Link>
        <br />
      </div>

      <div className="list-beer">
        <Link to="/ListBeers">
          <p>Beers</p>
        </Link>
        <br />
      </div>

      <div className="random-beer">
        <Link to="/RandomBeer">Random Beer</Link>
        <br />
      </div>

      <div className="new-beer">
        <Link to="/NewBeer">New Beer</Link>
        <br />
      </div>
    </div>
  );
};

export default Home;
