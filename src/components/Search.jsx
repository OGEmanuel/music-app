import { IconContext } from 'react-icons';
import { FaChevronLeft } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaPause } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import bg from '../assets/images/defaultBg.jpg';

const Search = props => {
  const { setPage } = props;
  const { isPlaying, setIsPlaying } = props;
  return (
    <section className="md:max-w-[60rem] h-screen mx-auto py-3 overflow-auto">
      <div className="md:w-[60%] px-6 md:px-0 h-full mx-auto">
        <div className="flex items-center mb-10 justify-between">
          <IconContext.Provider value={{ size: '1.5rem', className: 'icons' }}>
            <button className="h-max" onClick={() => setPage('NowPlaying')}>
              <FaChevronLeft />
            </button>
            <div className="flex gap-4 items-center">
              <FaSearch />
              <input
                type="search"
                className="bg-transparent rounded-md border-2 border-black px-2 py-1.5 outline-none"
                placeholder="Search"
              />
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
    </section>
  );
};

export default Search;
