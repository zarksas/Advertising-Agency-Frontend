import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReview } from '../../../redux/features/review';
import styles from './styles.module.css';

function ReviewPage() {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(true);

  const [text, setText] = useState('');

  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

  function handleChangeText(e) {
    setText(e.target.value);
    if (e.target.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleClickYes() {
    setYes(true);
    setNo(false);
  }

  function handleClickNo() {
    setNo(true);
    setYes(false);
  }

  function handleClickAddReview() {
    dispatch(addReview(text, yes, no));
    setText('');
    setYes(false);
    setNo(false);
  }

  return (
    <div className={styles.containerReview}>
      <input className={styles.oneWordReview} type="text" name="text" />
      <p>Если бы ваш отзыв ограничивался одной фразой, что бы вы сказали?</p>
      <input
        className={styles.textReview}
        type="text"
        name="text"
        value={text}
        onChange={handleChangeText}
      />
      <div className={styles.recInp}>
        <span>Рекомендуете ли вы это своим друзьям?</span>
        <div className={styles.yes}>
          <input
            value={yes}
            onChange={handleClickYes}
            type="radio"
            checked={yes}
            name="yes"
          />
          <label>Да</label>
        </div>
        <div className={styles.no}>
          <input
            value={no}
            onChange={handleClickNo}
            type="radio"
            checked={no}
            name="no"
          ></input>
          <label>Нет</label>
        </div>
      </div>
      <button disabled={disabled} onClick={handleClickAddReview}>
        Отправить
      </button>
    </div>
  );
}

export default ReviewPage;