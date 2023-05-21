import style from './style.scss';

interface Props {
  totalAmount: number;
  visibleAmount: number;
  isFiltered: boolean;
}

export const ControlBarAmountMeter: React.FC<Props> = ({
  totalAmount,
  visibleAmount,
  isFiltered,
}) => {
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
