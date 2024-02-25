import { useRouteError, Link } from 'react-router-dom';
import { ErrorContainer, NotFoundSection, GenericErrorSection } from './Error.style';


const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <ErrorContainer>
        <NotFoundSection>
          <h1 className="error-code">404</h1>
          <p className="error-message">Page not found!</p>
          <Link to="/" className="back-home-button">
            Go back Home
          </Link>
        </NotFoundSection>
      </ErrorContainer>
    );
  }

  return (
    <ErrorContainer>
      <GenericErrorSection>
        <p className="error-message">There was an error...</p>
        <p className="error-message">Please try again later.</p>
      </GenericErrorSection>
    </ErrorContainer>
  );
};

export default Error;
