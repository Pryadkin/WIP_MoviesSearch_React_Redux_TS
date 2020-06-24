//  Universal card
import CardMovieOfSearch from './mechanics/MOVIE_OF_SEARCH';
import { type } from 'jquery';

import { ICardMovieOfSearch } from './mechanics/MOVIE_OF_SEARCH';
// import CardMovieOfProfile from './mechanics/MOVIE_OF_PROFILE';


//  Object with mechanic customizations
//  func - функция, отрисовывающая данную механику
const mechanicsListSingle = {
  'MOVIE_OF_SEARCH': {
    func: CardMovieOfSearch
  },
};

const Card = (props: ICardMovieOfSearch) => {
  const {
    mechanics
  }: ICardMovieOfSearch = props;

  // Search mechanic function
  const renderFunc = mechanics in mechanicsListSingle
    ? mechanicsListSingle[mechanics].func
    : null;

  return renderFunc
    ? renderFunc(props)
    : null;
};

export default Card;
