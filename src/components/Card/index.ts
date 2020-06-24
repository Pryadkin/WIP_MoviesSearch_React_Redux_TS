//  Universal card
import CardMovieOfSearch from './mechanics/MOVIE_OF_SEARCH';
import CardMovieOfProfile from './mechanics/MOVIE_OF_PROFILE';

//  Object with mechanic customizations
//  func - функция, отрисовывающая данную механику
const mechanicsListSingle = {
  'MOVIE_OF_SEARCH': {
    func: CardMovieOfSearch
  },
  'MOVIE_OF_PROFILE': {
    func: CardMovieOfProfile
  },
};

const Card = props => {
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
