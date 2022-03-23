import React, { useEffect } from 'react';
import styles from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRents } from '../../../redux/features/cart';

const CartPage = () => {
  const dispatch = useDispatch();

  const rents = useSelector(state => state.cart.products.rents);
  const sales = useSelector(state => state.cart.products.sales);
  const userId = useSelector(state => state.application.id)

  console.log(rents);
  useEffect(() => {
    dispatch(fetchRents(userId));
  }, [dispatch]);

  return (
    <div className={styles.cartPage}>
      <div className={styles.cartBlock}>
        {rents.map((rent) => {
          return (
            <div className={styles.rent}>
              <div>{rent.image}</div>
              <div>{rent.name}</div>
              <div>{rent.adress}</div>
              {rent.sideA && rent.sideB ? <div>Обе стороны</div> : ''}
              {rent.sideA && !rent.sideB && <div>Сторона А</div>}
              {!rent.sideA && rent.sideB && <div>Сторона Б</div>}
              <div>{rent.price}</div>
            </div>
          );
        })}
        {sales.map((sale) => {
          return (
            <div className={styles.sale}>
              <div>
                <img src="/" alt="visitcard" />
              </div>
              <div>{sale.name}</div>
              <div>{sale.typePaper}</div>
              <div>{sale.count}</div>
              <div>{sale.price}</div>
            </div>
          );
        })}
      </div>
      <button>Оформить заказ</button>
    </div>
  );
};

export default CartPage;