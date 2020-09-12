import { Reducer } from 'redux';
import { IFilter } from '../../commonInterfaces';

export const IS_OPEN = "IS_OPEN";
export const ADD_MOVIES_FILTER = "ADD_MOVIES_FILTER";
export const REMOVE_MOVIES_FILTER = "REMOVE_MOVIES_FILTER";

const initialState = {
  filtration: [],
};

export type TFiltration = typeof initialState;

export const filtrationReducer: Reducer<TFiltration> = (state = initialState, action) => {
  switch (action.type) {
    case IS_OPEN:
      return {
        filtration: getFiltration(state.filtration, action.payload)
      };
    case ADD_MOVIES_FILTER:
      return {
        filtration: addMoviesFilterFunc(state.filtration, action.payload)
      };
    case REMOVE_MOVIES_FILTER:
      return {
        filtration: removeMoviesFilterFunc(state.filtration, action.payload)
      };
    default: return state;
  }
};

type TIsOpen = {
  type: typeof IS_OPEN
  payload: number | undefined
};

export type TAddMoviesFilter = {
  type: typeof ADD_MOVIES_FILTER
  payload: {
    newMoviesFilter: string,
    selectedMoviesFilter: IFilter | undefined
  }
};

export type TRemoveMoviesFilter = {
  type: typeof REMOVE_MOVIES_FILTER
  payload: number | undefined
};

export const isOpen = (filterId: number | undefined): TIsOpen => ({
  type: IS_OPEN,
  payload: filterId
})

export const addMoviesFilter = (newMoviesFilter: any, selectedMoviesFilter?: IFilter): TAddMoviesFilter => ({
  type: ADD_MOVIES_FILTER,
  payload: {
    newMoviesFilter,
    selectedMoviesFilter
  }
})

export const removeMoviesFilter = (filter_id: number | undefined): TRemoveMoviesFilter => ({
  type: REMOVE_MOVIES_FILTER,
  payload: filter_id
})

function getFiltration(arr: any, payload: number) {
  return arr.map((item: { id: number, filters: any, isOpen: boolean }) => {

    if (item.filters) {
      return {
        ...item,
        isOpen: item.id === payload ? !item.isOpen : item.isOpen,
        filters: getFiltration(item.filters, payload)
      }
    } else {
      return item
    }

  })
}

function addMoviesFilterFunc(
  arr: any,
  payload: {
    newMoviesFilter: string,
    selectedMoviesFilter: IFilter | undefined
  }) {
  const uniqueId = Math.trunc(Math.random() * 10e5);

  // get data from the localStorage
  if (Array.isArray(payload.newMoviesFilter)) {
    return payload.newMoviesFilter
  }

  /** if we don't selected the place to insert the filter,
   * the filter will be inserted at the topmost level
   */
  if (!payload.selectedMoviesFilter?.id) {
    return [
      ...arr,
      {
        id: uniqueId,
        name: payload.newMoviesFilter,
        path: payload.newMoviesFilter
      }
    ]
  }

  return arr.map((item: { id: number, name: string, path: string, filters: Array<IFilter>, isOpen: boolean }) => {

    if (item.id === payload.selectedMoviesFilter?.id) {
      if (item.filters) {
        return {
          ...item,
          isOpen: true,
          filters: [
            ...item.filters,
            {
              id: uniqueId,
              name: payload.newMoviesFilter,
              path: `${item.path}/${payload.newMoviesFilter}`
            }
          ]
        }
      } else {
        return {
          ...item,
          isOpen: true,
          filters: [{
            id: uniqueId,
            name: payload.newMoviesFilter,
            path: `${item.path}/${payload.newMoviesFilter}`
          }]
        }
      }

    } else {
      if (item.filters) {
        return {
          ...item,
          filters: addMoviesFilterFunc(item.filters, payload)
        }
      } else {
        return item
      }
    }

  })
}

function removeMoviesFilterFunc(arr: any, payload: number) {
  if (!payload) {
    return [...arr]
  }

  const newArr = arr.filter((item: { id: number }) => item.id !== payload);

  if (newArr.length < arr.length) {

    return newArr;

  } else {

    return arr.map((item: { id: number, name: string, filters: any, isOpen: boolean }) => {
      if (item.filters) {
        const newArray = removeMoviesFilterFunc(item.filters, payload);
        if (newArray.length < 1) {
          return {
            id: item.id,
            name: item.name
          }
        } else {
          return {
            ...item,
            filters: newArray
          }
        }

      } else {
        return item
      }
    })

  }
}
