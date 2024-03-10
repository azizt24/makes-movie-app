import { TagPlotContainer, Plot, TagLine } from './TagLineAndPlotStyles';
const TagLineAndPlot = ({ movie }) => {
  return (
    <TagPlotContainer>
      <TagLine>“ {movie.tagline} “</TagLine>
      <Plot>{movie.plot}</Plot>
    </TagPlotContainer>
  );
};

export default TagLineAndPlot;
