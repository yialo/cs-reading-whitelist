import style from './self.scss';

export const MainLayout: React.FC<{
  children: React.ReactNode;
  lang?: string;
}> = ({ children, lang }) => {
  return (
    <main lang={lang} className={style.root}>
      {children}
    </main>
  );
};
