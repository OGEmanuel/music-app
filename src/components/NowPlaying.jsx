import { IconContext } from 'react-icons';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaStepBackward } from 'react-icons/fa';
import { FaStepForward } from 'react-icons/fa';
import { FaPowerOff } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa';
import { FaOutdent } from 'react-icons/fa';
import bg from '../assets/images/defaultBg.jpg';
import { useState } from 'react';
import Lyrics from './Lyrics';
import Video from './Video';
import { useNavigate } from 'react-router-dom';

const NowPlaying = props => {
  const [tab, setTab] = useState('music');
  const navigate = useNavigate();
  const { isPlaying, setIsPlaying, setPage } = props;

  const logoutHandler = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <IconContext.Provider value={{ size: '1.5rem', className: 'icons' }}>
        <div className="flex items-center">
          <button onClick={logoutHandler}>
            <FaPowerOff />
          </button>
          <div className="flex w-max rounded-md mx-auto bg-black text-white">
            <p
              onClick={() => setTab('music')}
              className={`border-4 border-r-0 p-2.5 cursor-pointer ${
                tab === 'music'
                  ? 'font-bold rounded-md border-purple-800 border'
                  : 'font-normal border-[#d1d5db]'
              }`}
            >
              Music
            </p>
            <p
              onClick={() => setTab('video')}
              className={`border-4 p-2.5 cursor-pointer ${
                tab === 'video'
                  ? 'font-bold border-purple-800  rounded-md'
                  : 'font-normal border-[#d1d5db]'
              }`}
            >
              Video
            </p>
            <p
              onClick={() => setTab('lyrics')}
              className={`cursor-pointer border-4 border-l-0 p-2.5 ${
                tab === 'lyrics'
                  ? 'font-bold border-purple-800 rounded-md'
                  : 'font-normal border-[#d1d5db]'
              }`}
            >
              Lyrics
            </p>
          </div>
          <button onClick={() => setPage('Search')}>
            <FaSearch />
          </button>
        </div>
      </IconContext.Provider>
      <p className="font-bold text-2xl">
        Roar <span className="block font-semibold text-lg">Dunsin Oyekan</span>
      </p>
      {tab === 'music' && (
        <div className="rounded-md overflow-hidden h-[432px]">
          <img src={bg} alt="Now Playing" />
        </div>
      )}
      {tab === 'lyrics' && <Lyrics />}
      {tab === 'video' && <Video />}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p>0:00</p>
          <p>3:00</p>
        </div>
        <div className="w-full border border-black rounded-md hover:cursor-pointer">
          <div className="w-[60%] relative rounded-md hover:shadow-md hover:border-white bg-black h-2.5 after:h-[.9rem] transition-all after:w-[.9rem] after:absolute after:rounded-full after:bg-white after:-top-[.15rem] after:-right-2"></div>
        </div>
      </div>
      <div className="flex justify-between">
        <IconContext.Provider value={{ size: '2rem', className: 'icons' }}>
          <FaStepBackward />
          <button
            onClick={() => setIsPlaying(prev => !prev)}
            className="hover:scale-110 transition-all"
          >
            {isPlaying ? <FaPlay /> : <FaPause />}
          </button>
          <FaStepForward />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default NowPlaying;
