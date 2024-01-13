import { useQuery } from '@tanstack/react-query';
import { FunctionComponent, WheelEvent, useRef } from 'react';
import axios from '../../util/axios';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import loading from '../../assets/installing.json';

const Row: FunctionComponent<{
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
  genre: string;
}> = (props) => {
  const container = useRef<HTMLDivElement>(null);

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

  return (
    <section className="w-screen ml-5">
      <h1>{props.title}</h1>
      {isPending && <Lottie className="h-24 mx-auto" animationData={loading} />}
      {data && (
        <motion.div
          ref={container}
          className="flex flex-row gap-2 overflow-y-hidden overflow-x-scroll p-5 "
          onWheel={handleHorizontalScroll}
        >
          {data.map((movie) => (
            <motion.img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/original/${
                props.isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`w-full  object-contain ${
                props.isLargeRow ? 'max-h-64' : 'max-h-24'
              }`}
              whileHover={{ scale: props.isLargeRow ? 1.09 : 1.08 }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </motion.div>
      )}
    </section>
  );
};

interface Movie {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}
const fetchMovies = async ({
  url,
  signal,
}: {
  url: string;
  signal: AbortSignal;
}): Promise<Movie[]> => {
  const { data } = await axios.get(url, { signal });
  return await data.results;
};

export default Row;
