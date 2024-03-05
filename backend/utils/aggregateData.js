
import {ORIGINAL_IMG ,
  PROFILE_IMG,
  YOUTUBE,
} from '../config/constants.js'
const aggregateData = (tmdbData, omdbData, reviewsData) => {
  const tmdbWriters = tmdbData.credits.crew
    .filter(person => ['Screenplay', 'Writer', 'Author'].includes(person.job))
    .map(writer => writer.name);

  const combinedWriters = Array.from(new Set([
    ...tmdbWriters, 
    ...(omdbData.Writer ? omdbData.Writer.split(', ').map(writer => writer.trim()) : [])
  ]));

  const reviews = reviewsData && Array.isArray(reviewsData.results) ? reviewsData.results.map(review => ({
    author: review.author,
    content: review.content,
    url: review.url
  })) : [];

  return {
    poster: tmdbData.poster_path ? `${ORIGINAL_IMG}${tmdbData.poster_path}` : null,
    backdrop: tmdbData.backdrop_path ? `${ORIGINAL_IMG}${tmdbData.backdrop_path}` : null,
    title: tmdbData.title || omdbData.Title,
    year: tmdbData.release_date ? tmdbData.release_date.split('-')[0] : omdbData.Year,
    ratings: {
      tmdb: tmdbData.vote_average,
      imdb: omdbData.imdbRating,
      rottenTomatoes: omdbData.Ratings ? omdbData.Ratings.find(rating => rating.Source === 'Rotten Tomatoes')?.Value : null,
      metaCritic: omdbData.Metascore,
    },
    genre: tmdbData.genres.map(genre => genre.name).join(', ') || omdbData.Genre,
    director: tmdbData.credits.crew.find(person => person.job === 'Director')?.name,
    writers: combinedWriters,
    actors: tmdbData.credits.cast.map(actor => ({
      name: actor.name,
      character: actor.character,
      image: actor.profile_path ? `${PROFILE_IMG}${actor.profile_path}` : null,
    })),
    runTime: tmdbData.runtime || omdbData.Runtime,
    plot: tmdbData.overview || omdbData.Plot,
    tagline: tmdbData.tagline,
    trailers: tmdbData.videos ? tmdbData.videos.results.map(video => `${YOUTUBE}=${video.key}`) : [],
    language: tmdbData.original_language || omdbData.Language,
    reviews,
  };
};

export default aggregateData;