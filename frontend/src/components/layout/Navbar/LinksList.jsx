import { Link } from 'react-router-dom';

const LinksList = ({ links }) => {
  return (
    <ul>
      {links.map(link => (
        <li key={link.name}>
          <Link to={link.path}>{link.name}</Link>{' '}
          {/* CR - style the a tag as needed */}
        </li>
      ))}
    </ul>
  );
};
export default LinksList;
