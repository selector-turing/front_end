import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './Navigation.css';

const Navigation = ({ isMobile }) => {
  const activeStyle = {
    fontWeight: "bold",
    fontSize: "1.5rem"
  }

  const renderNavLinkList = () => {
    return (
      <>
        <NavLink exact to="/"
          activeStyle={activeStyle}
          className="navLink"
          data-cy="link-to-home"
        >
          Home
        </NavLink>
        <NavLink to="/your-favorites"
          activeStyle={activeStyle}
          className="navLink"
          data-cy="link-to-liked"
        >
          Your Favorite Albums
        </NavLink>
        <NavLink to="/random-album"
          activeStyle={activeStyle}
          className="navLink"
          data-cy="link-to-random-album"
        >
          Random Album
        </NavLink>
      </>
    )
  }

  const determineMobile = () => {
    if (!isMobile) {
      return renderNavLinkList();
    }

    if (isMobile) {
      return (
        <details>
          <summary>
            <MenuIcon />
          </summary>
            { renderNavLinkList() }
        </details>
      )
    }
  }

  return (
    <nav 
      className={isMobile ? "nav__mobile_view glass" : "nav__web_view glass"}
      data-cy="navigation"
    >
      { determineMobile() }
    </nav>
  )
}

export default Navigation;