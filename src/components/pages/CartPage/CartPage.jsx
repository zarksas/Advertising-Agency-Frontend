import { React, useEffect } from 'react';
import styles from './CartPage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVisitCard, fetchRents } from '../../../redux/features/cart';
import plain from '../../../assets/plain.jpg';
import touch from '../../../assets/touch.jpg';

const CartPage = () => {
  const dispatch = useDispatch();

  const sales = useSelector((state) => state.cart.products.sales);
  const loading = useSelector((state) => state.cart.loading);
  const rents = useSelector((state) => state.cart.products.rents);
  console.log(rents);

  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    dispatch(fetchRents());
  }, [dispatch]);

  const handleDeleteVisiCard = (id) => {
    dispatch(deleteVisitCard(id));
  };

  if (loading) {
    return <div>loading...</div>;
  }
  const handleClickDelete = () => {
    dispatch()
  }

  return (
    <div className={styles.cartPage}>
      {!!sales.length || !!rents.length ? (
        <div className={styles.cartBlock}>
          {rents.map((rent) => {
            return (
              <>
                <div key={rent._id} className={styles.item}>
                  <div className={styles.item1}>
                    <img src={rent.image} alt="" />
                  </div>
                  <div className={styles.item2}>{rent.name}</div>
                  <div className={styles.item3}>{rent.adress}</div>
                  <div className={styles.item4}>
                    {rent.sideA && rent.sideB ? <div>Обе стороны</div> : ''}
                    {rent.sideA && !rent.sideB && <div>Сторона А</div>}
                    {!rent.sideA && rent.sideB && <div>Сторона Б</div>}
                  </div>
                  <div className={styles.item5}>{rent.price}₽</div>
                  <button onClick={() => handleDeleteVisiCard(rent._id)}>
                    ×
                  </button>
                </div>
              </>
            );
          })}
          {sales.map((sale) => {
            return (
              <>
                <div key={sale._id} className={styles.item}>
                  <div className={styles.item1}>
                    {sale.typePaper === 1 ? (
                      <img src={plain} alt="visitcard" />
                    ) : (
                      <img src={touch} alt="visitcard" />
                    )}
                  </div>
                  <div className={styles.item2}>{sale.name}</div>
                  <div className={styles.item3}>
                    {sale.typePaper === 1 ? 'Меловка' : 'TouchCover'}
                  </div>
                  <div className={styles.item4}>{sale.count}шт</div>
                  <div className={styles.item5}>{sale.price}₽</div>
                  <button onClick={() => handleDeleteVisiCard(sale._id)}>
                    ×
                  </button>
                </div>
              </>
            );
          })}
          <div className={styles.total}>
            <button className={styles.orderBtn}>Оформить заказ</button>
            <div>Итого: {total}₽</div>
          </div>
        </div>
      ) : (
        <div className={styles.emptyCart}>В корзине нет товаров</div>
      )}
    </div>
  );
};

export default CartPage;
