import * as React from 'react';

import style from './style.scss';

type TProps = {
  totalAmount: number;
  visibleAmount: number;
  isFiltered: boolean;
};

export const ControlBarAmountMeter: React.FC<TProps> = ({
  totalAmount,
  visibleAmount,
  isFiltered,
}) => {
  const isAllVisible = visibleAmount === totalAmount;

  return (
    <p className={style.amountMeter}>
      {
        isAllVisible
          ? `Всего ${totalAmount}, показаны все${isFiltered ? ' совпадения' : ''}`
          : `Показано: ${visibleAmount} из ${totalAmount}${isFiltered ? ' совпадений' : ''}`
      }
    </p>
  );
};

ControlBarAmountMeter.displayName = 'ControlBar-AmountMeter';
