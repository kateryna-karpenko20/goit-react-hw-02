import React, { useState, useEffect } from 'react';
import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      <p className={css.item}>Good: {good}</p>
      <p className={css.item}>Neutral: {neutral}</p>
      <p className={css.item}>Bad: {bad}</p>
      <p className={css.item}>Total: {total}</p>
      <p className={css.item}>Positive Feedback: {positivePercentage}%</p>
    </div>
  );
};

export default Feedback;
