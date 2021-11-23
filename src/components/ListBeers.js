import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ListBeers = () => {
  const [beerArr, setBeerArr] = React.useState([]);
  const [searchText, setSearchText] = React.useState('');
  const [fullBeerArr, setFullBeerArr] = React.useState(beerArr);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      .then((info) => {
        setBeerArr(info.data);
      })
      .catch((err) => {
        console.log('something is wrong', err);
      });
  }, []);

  const search = () => {
    // console.log(searchText);
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q={B}`)
      .then((info) => {
        console.log(info);
      })
      .catch((err) => {
        console.log('something is wrong', err);
      });
  };

  return (
    <div>
      <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
      </header>

      <label for="searchbar">Search:</label>
      <input
        type="text"
        name="searchbar"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button onClick={search}>Search</button>
      <button>Reset</button>

      {beerArr.map((beers) => {
        return (
          <Link className="beer-main-info" to={`/SingleBeer/${beers._id}`}>
            <div>
              <img src={beers.image} alt={beers.name} />
            </div>
            <div>
              <p>{beers.name}</p>
              <p>{beers.tagline}</p>
              <p>{beers.contributed_by}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ListBeers;
