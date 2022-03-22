import React from 'react'
import styles from './STFormat.module.css'
import visitCardImage from '../../assets/STFormat.png'
import { Link } from 'react-router-dom'

const StFormat = () => {
  return (
    <div className={styles.STFormatCardBlock}>
      <div className={styles.STFormatCardContent}>
        <div className={styles.STFormatCardApp}>
          <div className={styles.STFormatCardTitle}>СИТИ-ФОРМАТ</div>
          <div className={styles.STFormatCardSubTitle}>Доставка по городу</div>
          <div className={styles.STFormatCardDesc}>
            Технически сити-формат — это световой короб (лайтбокс),
            имеющий строго определенные размеры: 1,2 на 1,8 м.
            Он может быть как односторонним, так и двухсторонним.
            Второй вариант более эффективен и используется гораздо чаще.
          </div>
          <Link to="/STFormat">
            <button className={styles.STFormatCardBtn}>Оформить заказ</button>
          </Link>
        </div>
        <img className={styles.STFormatCardImage} src={visitCardImage} alt="" />
      </div>
    </div>
  )
}

export default StFormat