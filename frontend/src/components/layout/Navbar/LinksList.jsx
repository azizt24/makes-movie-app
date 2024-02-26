import { Link } from 'react-router-dom';

const LinksList = ({ links, setIsMenuOpen }) => {
  return (
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </Link>{' '}
        </li>
      ))}
    </ul>
  );
};
export default LinksList;
