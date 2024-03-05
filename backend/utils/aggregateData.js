
export const aggregateData = (tmdbData, omdbData) => {
    const tmdbWriters = tmdbData.credits.crew
      .filter(person => ['Screenplay', 'Writer', 'Author'].includes(person.job))
      .map(writer => writer.name);
  
    const combinedWriters = Array.from(new Set([
      ...tmdbWriters, 
      ...(omdbData.Writer ? omdbData.Writer.split(', ').map(writer => writer.trim()) : [])
    ]));
  
  return {
    // CR - use a constant and not a string
    poster: tmdbData.poster_path
      ? `https://image.tmdb.org/t/p/original${tmdbData.poster_path}`
      : null,
    backdrop: tmdbData.backdrop_path
      ? `https://image.tmdb.org/t/p/original${tmdbData.backdrop_path}`
      : null,
    title: tmdbData.title || omdbData.Title,
    year: tmdbData.release_date
      ? tmdbData.release_date.split('-')[0]
      : omdbData.Year,
    ratings: {
      tmdb: tmdbData.vote_average,
      imdb: omdbData.imdbRating,
      rottenTomatoes: omdbData.Ratings
        ? omdbData.Ratings.find(rating => rating.Source === 'Rotten Tomatoes')
            ?.Value
        : null,
      metaCritic: omdbData.Metascore,
    },
    genre:
      tmdbData.genres.map(genre => genre.name).join(', ') || omdbData.Genre,
    director: tmdbData.credits.crew.find(person => person.job === 'Director')
      ?.name,
    writers: combinedWriters,
    actors: tmdbData.credits.cast.map(actor => ({
      name: actor.name,
      character: actor.character,
      image: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
        : null,
    })),
    runTime: tmdbData.runtime || omdbData.Runtime,
    plot: tmdbData.overview || omdbData.Plot,
    tagline: tmdbData.tagline,
    trailers: tmdbData.videos
      ? tmdbData.videos.results.map(
          video => `https://www.youtube.com/watch?v=${video.key}`
        )
      : [],
    language: tmdbData.original_language || omdbData.Language,
  };
  };
  