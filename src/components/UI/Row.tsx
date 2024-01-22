import { useQuery } from '@tanstack/react-query';
import { FunctionComponent, WheelEvent, useRef, useState } from 'react';
import axios from '../../util/axios';
import { motion } from 'framer-motion';
import { Loading } from './Animation';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const Row: FunctionComponent<{
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
  genre: string;
}> = (props) => {
  const container = useRef<HTMLDivElement>(null);
  const [trailerUrl, setTrailerUrl] = useState<string | null>('');
  const [currentMovieId, setCurrentMovieId] = useState<number | null>(null);

  const { data, isPending } = useQuery({
    queryKey: ['movies', props.genre],
    queryFn: ({ signal }) => fetchMovies({ url: props.fetchUrl, signal }),
  });

  const handleHorizontalScroll = (event: WheelEvent<HTMLDivElement>) => {
    const scrollAmount = event.deltaY;
    container.current?.scrollTo({
      top: 0,
      left: container.current.scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleMovieClick = async (movie: Movie) => {
    if (trailerUrl && currentMovieId === movie?.id) {
      setTrailerUrl('');
      setCurrentMovieId(null);
    } else {
      console.log(movie);
      movieTrailer(
        movie?.name ||
          movie?.title ||
          movie?.original_name ||
          movie?.original_title ||
          ''
      )
        .then((url: string) => {
          //https://www.youtube.com/watch?v=XtMThy9QKqU
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error: Error) => console.log(error.message));
    }
    setCurrentMovieId(movie?.id);
  };
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <section className="w-screen ml-5">
      <h1 className="text-2xl">{props.title}</h1>
      {isPending && <Loading />}
      {data && (
        <motion.div
          ref={container}
          className="flex flex-row gap-2 overflow-y-hidden overflow-x-scroll p-5 container_div"
          onWheel={handleHorizontalScroll}
        >
          {data.map((movie) => (
            <motion.img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={
                movie.name ||
                movie.title ||
                movie.original_name ||
                movie.original_title ||
                ''
              }
              className={`w-full  object-contain ${
                props.isLargeRow ? 'max-h-64' : 'max-h-24'
              }`}
              whileHover={{ scale: props.isLargeRow ? 1.09 : 1.08 }}
              transition={{ duration: 0.3, type: 'tween' }}
              onClick={() => handleMovieClick(movie)}
            />
          ))}
        </motion.div>
      )}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </section>
  );
};

export interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string | null;
  origin_country: string[];
  original_language: string;
  original_name: string | null;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title: string | null;
  original_title: string | null;
}

const fetchMovies = async ({
  url,
  signal,
}: {
  url: string;
  signal: AbortSignal;
}): Promise<Movie[]> => {
  const { data } = await axios.get(url, {
    signal,
  });
  return await data.results;
};

export default Row;
