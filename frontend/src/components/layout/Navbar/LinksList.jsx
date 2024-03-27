import { NavLink } from 'react-router-dom';

const LinksList = ({ links, setIsMenuOpen }) => {
  return (
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <NavLink
            to={link.path}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </NavLink>{' '}
        </li>
      ))}
    </ul>
  );
};
export default LinksList;
