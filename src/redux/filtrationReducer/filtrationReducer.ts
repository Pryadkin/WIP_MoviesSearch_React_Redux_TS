import { Reducer } from 'redux';

export const IS_OPEN = "IS_OPEN";
export const ADD_MOVIES_FILTER = "ADD_MOVIES_FILTER";
export const REMOVE_MOVIES_FILTER = "REMOVE_MOVIES_FILTER";

const initialState = {
  filtration: [],
};

// export type TFiltration = typeof initialState;
export type TFiltration = any;

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
  payload: string
};

export type TAddMoviesFilter = {
  type: typeof ADD_MOVIES_FILTER
  payload: {
    newMoviesFilter: string,
    selectedMoviesFilter: string | undefined
  }
};

export type TRemoveMoviesFilter = {
  type: typeof REMOVE_MOVIES_FILTER
  payload: string
};

export const isOpen = (name: string): TIsOpen => ({
  type: IS_OPEN,
  payload: name
})

export const addMoviesFilter = (newMoviesFilter: any, selectedMoviesFilter?: string): TAddMoviesFilter => ({
  type: ADD_MOVIES_FILTER,
  payload: {
    newMoviesFilter,
    selectedMoviesFilter
  }
})

export const removeMoviesFilter = (selectedMoviesFilter: string): TRemoveMoviesFilter => ({
  type: REMOVE_MOVIES_FILTER,
  payload: selectedMoviesFilter
})

function getFiltration(arr: any, payload: string) {
  return arr.map((item: { name: string, filters: any, isOpen: boolean }) => {

    if (item.filters) {
      return {
        ...item,
        isOpen: item.name === payload ? !item.isOpen : item.isOpen,
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
    newMoviesFilter: any,
    selectedMoviesFilter: string | undefined
  }) {

  if (Array.isArray(payload.newMoviesFilter)) {
    return payload.newMoviesFilter
  }

  if (!payload.selectedMoviesFilter) {
    return [
      ...arr,
      { name: payload.newMoviesFilter }
    ]
  }

  return arr.map((item: { name: string, filters: any, isOpen: boolean }) => {

    if (item.name === payload.selectedMoviesFilter) {
      if (item.filters) {
        return {
          name: item.name,
          isOpen: true,
          filters: [
            ...item.filters,
            { name: payload.newMoviesFilter }
          ]
        }
      } else {
        return {
          name: item.name,
          isOpen: true,
          filters: [{ name: payload.newMoviesFilter }]
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

function removeMoviesFilterFunc(arr: any, payload: string) {
  if (!payload) {
    return [...arr]
  }

  const newArr = arr.filter((item: { name: string }) => item.name !== payload);

  if (newArr.length < arr.length) {

    return newArr;

  } else {

    return arr.map((item: { name: string, filters: any, isOpen: boolean }) => {
      if (item.filters) {
        const newArray = removeMoviesFilterFunc(item.filters, payload);
        if (newArray.length < 1) {
          return { name: item.name }
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
