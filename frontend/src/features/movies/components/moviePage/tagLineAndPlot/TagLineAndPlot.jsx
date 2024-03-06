import { TagPlotContainer, Plot, TagLine } from './TagLineAndPlotStyles';
const TagLineAndPlot = ({ movie, moviebythembd }) => {
  return (
    <TagPlotContainer>
      <TagLine>“ {moviebythembd.tagline} “</TagLine>
      <Plot>{movie.Plot}</Plot>
    </TagPlotContainer>
  );
};

export default TagLineAndPlot;
