import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { HomePage } from './views/HomePage';
import { MovieSearch } from './views/MovieSearh';
import { MovieDetails } from './views/MovieDetails';
import { Actors } from './views/Actors';
import { Reviews } from 'views/Reviews';
import { MovieViews } from './views/MovieViews';

const App = () => {
  return (
    <>
      <Layout />
      <Routes>
        <Route index path="/" element={<HomePage />} />

        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="actors" element={<Actors />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
