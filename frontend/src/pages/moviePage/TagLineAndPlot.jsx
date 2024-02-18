import styled  from 'styled-components';

const TagLine =styled.h2`
    font-size:16px;
    color:#0c3675;
    font-weight:300;
    display:flex;
    margin-left:20px;
`;
const Plot=styled.p`
     font-size:1rem;
    color:#0c3675;
    width:50%;
    display:flex;
    margin-left:20px;
`;
const TagLineAndPlot = () => {
  return (
    <div>
        <TagLine>
         <h2>“Every generation has a legend”</h2>
        </TagLine>
      <Plot>
         <p>The surviving Resistance faces the First Order once again as the journey of Rey,
            Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.</p>
      </Plot>
          
    </div>
  );
};

export default TagLineAndPlot;
