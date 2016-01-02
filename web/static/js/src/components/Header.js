import { Link } from 'react-router';
const Header = () => {
  return (
    <div classNameName='container'>
      <header className='header'>
        <nav role='navigation'>
          <ul className='nav nav-pills pull-right'>
            <li><Link to='/sign-in'>Sign In | Sign Up</Link></li>
          </ul>
        </nav>
        <span className='logo'></span>
      </header>
    </div>
  );
};

export default Header;
