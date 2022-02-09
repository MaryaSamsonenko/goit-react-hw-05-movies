import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './views/HomePage';
import { MovieSearch } from './views/MovieSearh';
import { MovieDetails } from './views/MovieDetails';
import { Actors } from './views/Actors';
import { Reviews } from 'views/Reviews';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="searchmovies" element={<MovieSearch />} />
        <Route path="searchmovies/:movieId" element={<MovieDetails />}></Route>

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="actors" element={<Actors />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
export default App;
