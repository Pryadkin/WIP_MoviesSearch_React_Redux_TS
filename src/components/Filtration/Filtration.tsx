import React from 'react';
import styles from './FiltrationContainer.module.scss';
import { IFilter } from '../../commonInterfaces';

interface IFiltration {
  filtration: any,
  changeNest: ({ id: number, name: string }: IFilter) => void
}

export interface IItem {
  id: number,
  name: string,
  isOpen: boolean,
  filters: Array<IItem>
}

const Filtration: React.FC<IFiltration> = ({ filtration, changeNest }) => {

  const filt = (array: any) => {

    return array.map((item: IItem, index: number) => {
      if (item.filters) {

        return (
          <div key={`${item.id}-${index}`}>
            <div
              className={[styles.genreName, styles.genreHasFilters].join(' ')}
              onClick={() => changeNest({ id: item.id, name: item.name })}
            >
              {item.name}
            </div>

            {item.isOpen ?
              <div style={{ marginLeft: "20px" }}>
                {filt(item.filters)}
              </div>
              : null
            }
          </div>
        )
      }

      return (
        <div
          key={`${item.id}-${index}`}
          className={styles.genreName}
          onClick={() => changeNest({ id: item.id, name: item.name })}
        >
          {item.name}
        </div>
      )
    })
  }

  return (
    <div className={styles.container}>
      {filtration ?
        filt(filtration)
        : 'Filters is not found'
      }
    </div>
  )

}

export default Filtration;