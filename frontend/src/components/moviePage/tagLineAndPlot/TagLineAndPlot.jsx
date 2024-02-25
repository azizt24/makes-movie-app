import { TagPlotContainer, Plot } from './TagLineAndPlotStyles';
const TagLineAndPlot = ({ movie }) => {
  return (
    <TagPlotContainer>
      <h2> “ {movie.Tag} “</h2>

      <Plot>
        {' '}
        <p>{movie.Plot}</p>{' '}
      </Plot>
    </TagPlotContainer>
  );
};

export default TagLineAndPlot;
