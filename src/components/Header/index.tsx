import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './Header.styles';
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <img src='./img/movie.svg' alt='search-icon' />
        </Link>
        <h1>theMovieDB</h1>
      </Content>
    </Wrapper>
  );
};

export default Header;
