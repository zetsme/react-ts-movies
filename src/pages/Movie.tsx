import { useParams } from 'react-router-dom';
import Actor from '../components/Actor';
import BreadCrumb from '../components/BreadCrumb';
import Grid from '../components/Grid';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Spinner from '../components/Spinner';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import { useMovieFetch } from '../hooks/useMovieFetch';
const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;
  return (
    <>
      <BreadCrumb movieTitle={movie.title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header='Actors'>
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : './img/notFound.jfif'
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
