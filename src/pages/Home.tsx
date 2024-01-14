import requests from '../util/requests';
import Row from '../components/UI/Row';
import Banner from '../components/UI/Banner';

function HomePage() {
  return (
    <>
      <Banner />
      <main className={`flex flex-col gap-4 text-white overflow-hidden`}>
        <Row
          title="NETFLIX ORIGINALS"
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
          genre="netflixoriginals"
        />
        <Row
          title="Trending Now"
          fetchUrl={requests.fetchTrending}
          genre="trendingnow"
        />
        <Row
          title="Top Rated"
          fetchUrl={requests.fetchTopRated}
          genre="toprated"
        />
        <Row
          title="Action Movies"
          fetchUrl={requests.fetchActionMovies}
          genre="action"
        />
        <Row
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          genre="comedy"
        />
        <Row
          title="Horror Movies"
          fetchUrl={requests.fetchHorrorMovies}
          genre="horror"
        />
        <Row
          title="Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          genre="romance"
        />
        <Row
          title="Documentaries"
          fetchUrl={requests.fetchDocumentaries}
          genre="documentaries"
        />
      </main>
    </>
  );
}

export default HomePage;
