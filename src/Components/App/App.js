import AlbumCardsDisplay from '../AlbumCardsDisplay/AlbumCardsDisplay'
import Navigation from '../Navigation/Navigation';
import Search from '../Search/Search';
import Details from '../Details/Details.js';
import RandomDetails from '../RandomDetails/RandomDetails'
import { Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Tooltip } from '@material-ui/core';
import './App.css';
import '../../normalize.css';
import FavoriteAlbumsDisplay from '../FavoriteAlbums/FavoriteAlbums'


function App() {
  const [favorites, setFavorites] = useState([]);
  const [searchAlbum, setAlbumSearch] = useState([])
  const [artist, setSearchArtist] = useState("Pink Floyd");
  
  const addFavorite = (toAdd) => {
    if (favorites.includes(toAdd)) {
      return;
    }
    return setFavorites([...favorites, toAdd]);
  }

  const removeFavorite = (toRemove) => {
    return setFavorites(favorites.filter(title => title !== toRemove));
  }

  const determineFav = (isFav) => {
    if (isFav) {
      return (
      <Tooltip title="Remove from Favorites" placement="left">
        <FavoriteIcon
        fontSize="large"
        data-cy="details_favorites-button_filled"
        />
      </Tooltip>
      )
    }
    return (
      <Tooltip title="Add to Favorites" placement="left">
        <FavoriteBorderIcon
        fontSize="large"
        data-cy="details_favorites-button_unfilled"
        />
      </Tooltip>
    )
  }

  const isFavorite = (title) => {
    return favorites.includes(title);
  }

  const toggleFav = (title) => {
    if (isFavorite(title)) {
      return removeFavorite(title);
    }
    return addFavorite(title);
  }

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 780px)'
  });

  return (
    <div className="App">
      <header>
        <h1 className="header__h1">Selector</h1>
        <Search setSearchArtist={setSearchArtist}/>
      </header>
      <Navigation isMobile={ isTabletOrMobile }/>
      <main>
        <Switch>
          <Route exact path="/">
            <section className="glass">
              <AlbumCardsDisplay titles={ searchAlbum } artist={artist}/>
            </section>
          </Route>
          <Route exact path="/your-favorites">
            <section className="glass">
              <FavoriteAlbumsDisplay
                favorites={ favorites }
              />
            </section>  
          </Route>
          <Route exact path="/random-album" render={() => {
            return (
              <RandomDetails
                toggleFav={ toggleFav }
                determineFav={ determineFav }
                isFavorite={ isFavorite }
              />
            )
          }} />
          <Route exact path="/:title" render={({ match }) => {
            const { title } = match.params;
            return (
              <Details
                title={ title }
                toggleFav={ toggleFav }
                determineFav={ determineFav }
                isFavorite={ isFavorite }
              />
            )
          }} />
          <Route path="*">
            <h1>This page doesn't exist! Please navigate back to home with the sidebar</h1>
          </Route>
        </Switch>
      </main>
      <video muted autoPlay loop>
        <source src='/red-with-needle.mp4' type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
