import React from 'react';
import styles from './FiltrationContainer.module.scss';

interface IFiltration {
  filtration: any,
  changeNest: (name: string) => void
}

const Filtration: React.FC<IFiltration> = ({ filtration, changeNest }) => {

  const filt = (array: any) => {

    return array.map((item: any, index: number) => {

      if (item.filters) {

        return (
          <div key={index}>
            <div
              className={[styles.genreName, styles.genreHasFilters].join(' ')}
              onClick={() => changeNest(item.name)}
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
          key={index}
          className={styles.genreName}
          onClick={() => changeNest(item.name)}
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