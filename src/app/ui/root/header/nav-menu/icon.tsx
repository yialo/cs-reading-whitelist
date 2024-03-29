import style from './style.scss';

const closePath = (
  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
);
const openPath = <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />;

export const AppNavMenuIcon: React.FC<{
  isExpanded: boolean;
}> = ({ isExpanded }) => {
  return (
    <svg
      aria-hidden="true"
      className={style.icon}
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      {isExpanded ? closePath : openPath}
    </svg>
  );
};
