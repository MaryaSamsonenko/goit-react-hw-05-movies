import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from '../style/GlobalStyle';
const createChunk = componentName => {
  return lazy(() =>
    import(`views/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const HomePage = createChunk('HomePage');
const MovieDetails = createChunk('MovieDetails');
const Cast = createChunk('Cast');
const Reviews = createChunk('Reviews');
const MovieSearch = createChunk('MovieSearch');
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout />
      <Suspense fallback="">
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
export default App;
