//  Universal card
import CardMovieOfSearch from './mechanics/MOVIE_OF_SEARCH';
import CardMovieOfProfile from './mechanics/MOVIE_OF_PROFILE';

// types
import { ICardMovieOfSearch, ICardMovieOfProfile } from './types';

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

  // Search mechanic function
  const renderFunc = mechanics in mechanicsListSingle
    ? mechanicsListSingle[mechanics].func
    : null;

  return renderFunc
    ? renderFunc(props)
    : null;
};

export default Card;
