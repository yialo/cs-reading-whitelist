import style from './self.scss';

export const MainLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return <main className={style.root}>{children}</main>;
};
