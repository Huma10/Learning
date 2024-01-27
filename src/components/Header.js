import { Link, NavLink } from 'react-router-dom';
import LogoutUser from './logout';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsBoxArrowRight }
  from 'react-icons/bs'
import MyProfile from './MyProfile';
import { LoginContext } from "../ContextProvider/context";
import { useContext } from 'react';
const Header = ({ OpenSidebar }) => {
  const logindata = useContext(LoginContext);
  return (

    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <BsSearch className='icon' />
      </div>
      <div className='header-right'>
        {/* <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />         */}
         <Link to={`/my-profile/${logindata?.logindata.id}`} className='text-dark'>
          <BsPersonCircle className='icon' />
        </Link>
        <LogoutUser />
       
      </div>
    </header>
  );
}

export default Header;