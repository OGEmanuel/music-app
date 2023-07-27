import { useState } from 'react';
import NowPlaying from './NowPlaying';
import Search from './Search';

const MainApp = () => {
  const [page, setPage] = useState('Search');
  const [isPlaying, setIsPlaying] = useState(false);
  const [inputValue, setInputValue] = useState();

  return (
    <>
      {page === 'NowPlaying' && (
        <NowPlaying
          setPage={setPage}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
      {page === 'Search' && (
        <Search
          setPage={setPage}
          isPlaying={isPlaying}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setIsPlaying={setIsPlaying}
        />
      )}
    </>
  );
};

export default MainApp;

// const loadSongs = async () => {

//   //   const response = await fetch('http://localhost:8080/events');
//   //   if (!response.ok) {
//   //     // return { isError: true, message: 'Could not fetch events.' };
//   //     // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
//   //     //   status: 500,
//   //     // });
//   //     throw json({ message: 'Could not fetch events.' }, { status: 500 });
//   //   } else {
//   //     const resData = await response.json();
//   //     return resData.events;
//   //   }
// };

// export const loader = () => {
//   return defer({
//     events: loadSongs(),
//   });
// };
