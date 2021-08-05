import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
// Components
import Home from './pages/Home';
import Movie from './pages/Movie';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Container from './components/Container';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:movieId' element={<Movie />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
