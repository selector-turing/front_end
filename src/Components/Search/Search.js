import SearchIcon from '@material-ui/icons/Search';
import './Search.css';
import { useState } from 'react';

const Search = () => {
  const [userQuery, setUserQuery] = useState('');

  return (
    <form className="search">
      <SearchIcon />
      <input id="searchField" ></input>
    </form>
  )
}

export default Search;