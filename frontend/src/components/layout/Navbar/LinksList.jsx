import { Link } from 'react-router-dom';

const LinksList = ({ links }) => {
  return (
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.path}>{link.name}</Link>{' '}
        </li>
      ))}
    </ul>
  );
};
export default LinksList;
