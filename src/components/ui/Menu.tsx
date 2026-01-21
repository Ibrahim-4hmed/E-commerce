import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import type { JSX } from "react"
import "./ui.css"

function Menu() {
    const location = useLocation()
    type NavLinkTypes = {
        href: string;
        label: string;
    };
    const navLinks: NavLinkTypes[] = [
    {href: '/', label: 'HOME' },
    {href: '/shop', label: 'SHOP' },
    {href: '/about', label: 'ABOUT' },
    ];
    return (
        <div className='menu'>
            <nav className="menu-links">
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

export default Menu