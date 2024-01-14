import { NavLink } from 'react-router-dom';
import LogoutUser from './logout';


const Header = () => {

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark text-white bg-nav">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/dash">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/channel">Channels</NavLink>
              </li>
            </ul>
            <ul>
              <li className='d-flex'>
                <LogoutUser/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;