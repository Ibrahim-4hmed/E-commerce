import { type JSX } from 'react'
import './header.css'
import { Link, useLocation } from 'react-router-dom';

function NavLink(): JSX.Element {

  const location = useLocation()

  type NavLinkTypes = {
    href: string;
    label: string;
  };

  const navLinks: NavLinkTypes[] = [
    { href: '/', label: 'HOME' }, 
    { href: '/shop', label: 'SHOP' }, 
    { href: '/about', label: 'ABOUT' }, 
  ];
  return (
    <div className=''>
       <nav className="nav-links">
            {navLinks.map((item: NavLinkTypes): JSX.Element => (
                <li key={item.href} className={location.pathname === item.href ? "active" : ""}>
                   <Link to={item.href}>
                      {item.label}
                  </Link>
                </li>
            ))}
        </nav>
    </div>
  )
}

export default NavLink