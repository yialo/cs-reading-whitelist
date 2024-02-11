import style from './style.scss';

export const ControlBarAmountMeter: React.FC<{
  totalAmount: number;
  visibleAmount: number;
  isFiltered: boolean;
}> = ({ totalAmount, visibleAmount, isFiltered }) => {
  const isAllVisible = visibleAmount === totalAmount;

  return (
    <p className={style.amountMeter}>
      {isAllVisible
        ? `Всего ${totalAmount}, показаны все${isFiltered ? ' совпадения' : ''}`
        : `Показано: ${visibleAmount} из ${totalAmount}${
            isFiltered ? ' совпадений' : ''
          }`}
    </p>
  );
};

ControlBarAmountMeter.displayName = 'ControlBar-AmountMeter';
