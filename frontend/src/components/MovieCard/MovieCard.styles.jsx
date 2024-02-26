import styled from 'styled-components';

export const Card = styled.div`
  width: 150px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  perspective: 1000px;
`;

export const Poster = styled.img`
  width: 150px;
  height: 250px;
`;

export const PosterBack = styled(Poster)`
  display: block;
  margin: 0 auto;
  width: 150px;
  height: 250px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.6);
`;

export const Details = styled.div`
  padding: 10px;
  color: white;
`;

export const Button = styled.button`
  border: none;
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 8px);
`;
