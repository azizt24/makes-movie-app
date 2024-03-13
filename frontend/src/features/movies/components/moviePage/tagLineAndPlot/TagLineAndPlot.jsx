import { TagPlotContainer, Plot, TagLine } from './TagLineAndPlotStyles';
const TagLineAndPlot = ({ movie }) => {
  return (
    <TagPlotContainer>
    {movie.tagline && (  <TagLine>“ {movie.tagline} “</TagLine>)}
     {movie.plot &&( <Plot>{movie.plot}</Plot>)}
    </TagPlotContainer>
  );
};

export default TagLineAndPlot;
