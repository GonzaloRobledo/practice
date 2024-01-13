'use client'
import { GlobalContext } from '@/context/global'
import styles from '@/styles/Main/Products/filters.module.css'
import { useContext } from 'react'

export const FilterSection = () => {
  const { themeLight } = useContext(GlobalContext)

  return (
    <section>
      <form
        className={`${styles.container} ${
          !themeLight ? styles.container_dark : ''
        } container-72`}
      >
        <div>
          <div>
            <label>Search Product</label>
            <input type='text' />
          </div>

          <div>
            <label>Select Category</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div>
            <label>Select Company</label>
            <select>
              <option>All</option>
            </select>
          </div>

          <div>
            <label>Sort By</label>
            <select>
              <option>A-Z</option>
              <option>Z-A</option>
              <option>High</option>
              <option>Low</option>
            </select>
          </div>
        </div>
        <div>
          <div className={styles.select_price}>
            <div>
              <label>Select Price</label>
              <p>$100000</p>
            </div>
            <input type='range' />
          </div>

          <div className={styles.free_shipping}>
            <label>Free Shipping</label>
            <div />
          </div>

          <div>
            <input
              type='submit'
              value='Search'
              className={styles.submit_button}
            />
          </div>
          <div>
            <button className={styles.reset_button}>Reset</button>
          </div>
        </div>
      </form>
    </section>
  )
}
