import { useState } from 'react';
import NowPlaying from './components/NowPlaying';
import Search from './components/Search';

function App() {
  const [page, setPage] = useState('NowPlaying');
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      {page === 'NowPlaying' && <NowPlaying setPage={setPage} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />}
      {page === 'Search' && <Search setPage={setPage} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />}
    </>
  );
}

export default App;
