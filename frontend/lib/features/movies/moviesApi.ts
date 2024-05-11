// A mock function to mimic making an async request for data
export const fetchMovies = async (name: string) => {
  const response = await fetch(`http://localhost:3000/movies/${name}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const movies = [await response.json()];

  return movies;
};
