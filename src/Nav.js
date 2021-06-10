import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
          <Link className="link" to="/">Home</Link> 
          <Link className="link" to="/about">About</Link> 
          <Link className="link" to="/profiles">Profiles</Link> 
        </nav>
    )
}



export default Nav;