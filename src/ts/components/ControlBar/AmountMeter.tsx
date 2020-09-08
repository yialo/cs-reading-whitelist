import React from 'react';

import style from './style.scss';

interface IProps {
  totalAmount: number;
  visibleAmount: number;
  isFiltered: boolean;
}

export const ControlBarAmountMeter: React.FC<IProps> = ({
  totalAmount,
  visibleAmount,
  isFiltered,
}) => {
  const isAllVisible = visibleAmount === totalAmount;

  return (
    <p className={style.amountMeter}>
      {isAllVisible && (
        `Всего ${totalAmount}, показаны все${isFiltered ? ' совпадения' : ''}`
      )}
      {!isAllVisible && (
        isFiltered
          ? `Показано ${visibleAmount} из ${totalAmount} совпадений`
          : `Показаны первые ${visibleAmount} из ${totalAmount}`
      )}
    </p>
  );
};
