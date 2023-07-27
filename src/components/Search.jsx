import { IconContext } from 'react-icons';
import { FaChevronLeft } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import bg from '../assets/images/defaultBg.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken } from '../../util/getToken';

const URL_SEARCH = 'https://web-production-57656.up.railway.app/users/search';

const Search = props => {
  const {
    isPlaying,
    setIsPlaying,
    setPage,
    setInputValue,
    inputValue,
    setData,
    data,
    setCurrPlay,
    currPlay,
  } = props;
  const token = getToken();

  useEffect(() => {
    const header = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const param = {
      params: {
        query: inputValue,
      },
    };
    const search = async () => {
      try {
        const response = await axios.get(URL_SEARCH, header, param);
        const result = await response.data.data;
        setData(result);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, []);

  const onPlay = artist => {
    const playing = data.map(data => data).find(data => data.artist === artist);
    setCurrPlay(playing);
    console.log(currPlay);
    setIsPlaying(prev => !prev);
    setPage('NowPlaying');
  };

  return (
    <div>
      <div className="flex items-center mb-10 justify-between">
        <IconContext.Provider value={{ size: '1.5rem', className: 'icons' }}>
          <button className="h-max" onClick={() => setPage('NowPlaying')}>
            <FaChevronLeft />
          </button>
          <div className="flex gap-4 items-center">
            <input
              type="search"
              onChange={e => setInputValue(e.target.value)}
              className="bg-transparent rounded-md border-2 border-black px-2 py-1.5 outline-none"
              placeholder="Search"
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </IconContext.Provider>
      </div>
      <div className="flex flex-col gap-4">
        {data?.map((data, i) => (
          <div
            key={i}
            className="h-[5rem] flex justify-between pr-7 bg-white rounded-md"
          >
            <div className="flex items-center gap-5">
              <img
                src={data.album_art_url}
                alt="Album art"
                className="h-full rounded-md"
              />
              <p className="font-bold text-lg md:text-2xl">
                {data.album}{' '}
                <span className="block font-semibold text-base md:text-lg">
                  {data.artist}
                </span>
              </p>
            </div>
            <button
              onClick={() => onPlay(data.artist)}
              className="hover:scale-110 transition-all"
            >
              {currPlay.artist === data.artist && isPlaying ? (
                <FaPlay />
              ) : (
                <FaPause />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
