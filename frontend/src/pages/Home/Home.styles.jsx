import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: var(--secondary-color);
  width: 100%;
 
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;  

  @media (max-width: 768px) {
    min-height: auto;  
    padding: 20px;
    
  }
  @media (max-width: 500px) {
   padding: 0;
   margin:0;
  }
`;


export const Title = styled.div`
font-size: var(--heading-primary);
  font-weight: 700;
margin-top: 5rem;
  color: var(--text-white);
  text-align: center;
  margin-top: 4rem;
  @media (max-width:1200px) {
    font-size:2rem;
    
  }
 
`;

export const SubTitle = styled.div`
   font-size: var(--heading-secondary);
  font-weight: 700;
  margin-bottom: 15px;
  color: var(--primary-color);
  text-align: center;
  @media (max-width: 1200px) {
    font-size:1.8rem;
    
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
 
margin-bottom: 45px;
 
`;



export const Link = styled.a`
  color: var(--primary-color);
  text-decoration: none;
`;

export const MovieCardContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;



