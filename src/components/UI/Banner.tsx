import { useQuery } from '@tanstack/react-query';
import axios from '../../util/axios';
import requests from '../../util/requests';
import { Movie } from './Row';
import { Loading } from './Animation';

function Banner() {
  const { data: movie, isPending } = useQuery({
    queryKey: ['movies', requests.fetchNetflixOriginals],
    queryFn: ({ signal }) =>
      fetchRandomMovie({ url: requests.fetchNetflixOriginals, signal }),
  });
  const buttonClass =
    'bg-black/60 px-10 py-2 hover:bg-gray-400/80 hover:text-black rounded-sm duration-300 font-bold';

  if (isPending) {
    <Loading />;
  }
  const truncate = (str: string, n: number) =>
    str.length > n ? str.substr(0, n - 1) + '...' : str;

  return (
    <header
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
      className="bg-cover h-[448px]"
    >
      <div className="ml-8 pt-36 text-white">
        <h1 className="relative text-5xl font-extrabold pb-5">
          {movie?.name || movie?.name || movie?.original_name}
        </h1>
        <menu className="flex gap-5">
          <button className={buttonClass}>Play</button>
          <button className={buttonClass}>My List</button>
        </menu>
        <h2 className="w-100 pt-4 text-lg">
          {movie && truncate(movie?.overview, 150)}
        </h2>
      </div>
      <div className="mt-2 bg-gradient-to-t from-[#111] to-transparent h-30" />
    </header>
  );
}

const fetchRandomMovie = async ({
  url,
  signal,
}: {
  url: string;
  signal: AbortSignal;
}) => {
  const { data }: { data: { results: Movie[] } } = await axios.get(url, {
    signal,
  });
  const randomMovieIndex = Math.floor(Math.random() * data.results.length - 1);

  return await data.results[randomMovieIndex];
};

export default Banner;
