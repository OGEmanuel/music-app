import { IconContext } from 'react-icons';
import { FaChevronLeft } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import bg from '../assets/images/defaultBg.jpg';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL_SEARCH = 'https://web-production-57656.up.railway.app/users/search';

const Search = props => {
  const { isPlaying, setIsPlaying, setPage, setInputValue, inputValue } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    const token = data.auth_token;

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
        // const result = await response;
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    search();
  }, []);

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
      <div className="h-[5rem] flex justify-between pr-7 bg-white rounded-md">
        <div className="flex items-center gap-5">
          <img src={bg} alt="Album art" className="h-full rounded-md" />
          <p className="font-bold text-lg md:text-2xl">
            Roar{' '}
            <span className="block font-semibold text-base md:text-lg">
              Dunsin Oyekan
            </span>
          </p>
        </div>
        <button
          onClick={() => setIsPlaying(prev => !prev)}
          className="hover:scale-110 transition-all"
        >
          {isPlaying ? <FaPlay /> : <FaPause />}
        </button>
      </div>
    </div>
  );
};

export default Search;
