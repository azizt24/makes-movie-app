import styled from 'styled-components';

export const CastCard = styled.div`
  margin-top: 5rem;
  width: 160px;
  height: 330px;
  background-color: #49bcec;

  border-radius: 20px;
  margin-left: 8px;
  box-shadow: 0 8px 6px -6px grey;
  margin-bottom: 60px;
`;
export const CastName = styled.h3`
  display: flex;
  justify-content: left;
  font-size: 15px;
  margin-left: 10px;
  color: black;
  font-weight: bold;
  font-weight: 400;
`;
export const CastChar = styled.p`
  display: flex;
  justify-content: left;
  margin-left: 8px;

  color: red;
  font-size: 15px;
`;
export const CastImg = styled.img`
  padding: 5px;

  width: 80px;
  height: 200px;
  border-radius: 20px;
`;
export const arrowStyles = {
  position: 'absolute',
  zIndex: 2,
  top: 'calc(60% - 72px)',

  width: 30,
  height: 30,
  cursor: 'pointer',
  background: '#49BCEC',
  border: 'none',
  color: '#7AD3F3',
  borderRadius: '50%',
  fontSize: '30px',
  fontWeight: 'bold',
};
export const HorizontalLine = styled.hr`
  border: 0;
  height: 1px;
  background:red;
  margin-top: 5rem; 
  margin-left:0.5rem;
  margin-right:0.5rem;
`;