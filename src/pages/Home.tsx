// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config';
import { useHomeFetch } from '../hooks/useHomeFetch';
// Components
import HeroImage from '../components/HeroImage';
import Grid from '../components/Grid';
import Thumb from '../components/Thumb';
import Spinner from '../components/Spinner';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';

const Home: React.FC = () => {
  const { state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } = useHomeFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          title={state.results[0].title}
          text={state.results[0].overview}
          image={`
        ${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}
      `}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : './img/notFound.jfif'
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button callback={() => setIsLoadingMore(true)} text='Loading More' />
      )}
    </>
  );
};

export default Home;
