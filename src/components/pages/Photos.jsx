import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

const Photos = () => {
  const url = 'https://jsonplaceholder.typicode.com/photos?_start=0&_limit=15';
  const initialState = { results: null, loading: true, error: null };

  const { results, loading, error } = useFetch(url, initialState);

  if (loading)
    return (
      <section>
        <p>Loading...</p>
      </section>
    );

  if (error) return <p>{error}</p>;

  const photos = results.map((photo) => (
    <li key={photo.id}>
      <Link to={`/photoDetail/${photo.id}`}>
        <p>{photo.title}</p>
      </Link>
    </li>
  ));

  return <section>{photos}</section>;
};

export default Photos;
