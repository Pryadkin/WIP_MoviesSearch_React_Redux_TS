//  Universal card
import CardMovieOfSearch from './mechanics/MOVIE_OF_SEARCH';
import CardMovieOfProfile from './mechanics/MOVIE_OF_PROFILE';

// import { ICardMovieOfSearch } from './mechanics/MOVIE_OF_SEARCH';
// import { ICardMovieOfProfile } from './mechanics/MOVIE_OF_PROFILE';

export interface ICardMovieOfSearch {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  addMovieHandler?: (id: number) => void
  mechanics: 'MOVIE_OF_SEARCH' | 'MOVIE_OF_PROFILE'
}

export interface ICardMovieOfProfile {
  id: number
  title: string
  poster_path: string | null
  release_date: string
  mechanics: 'MOVIE_OF_SEARCH' | 'MOVIE_OF_PROFILE'
}

//  Object with mechanic customizations
const mechanicsListSingle = {
  'MOVIE_OF_SEARCH': {
    func: CardMovieOfSearch
  },
  'MOVIE_OF_PROFILE': {
    func: CardMovieOfProfile
  },
};

const Card = (props: ICardMovieOfSearch | ICardMovieOfProfile) => {
  const {
    mechanics
  } = props;

  // const renderFunc = mechanicsListSingle[mechanics].func;

  // return renderFunc(props)

  // Search mechanic function
  const renderFunc = mechanics in mechanicsListSingle
    ? mechanicsListSingle[mechanics].func
    : null;

  return renderFunc
    ? renderFunc(props)
    : null;
};

export default Card;
