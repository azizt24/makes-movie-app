import { FooterContainer, FooterContent, PoweredBy } from './Footer.style';

const Footer = ({ isToggled }) => {
  return (
    <FooterContainer isToggled={isToggled}>
      <PoweredBy>Powered by</PoweredBy> <FooterContent />
    </FooterContainer>
  );
};

export default Footer;

