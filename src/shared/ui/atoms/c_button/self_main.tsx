import { cn } from '@/shared/lib/cn';

import { Button, type ButtonProps } from './self';
import style from './style.scss';

export const MainButton: React.FC<ButtonProps> = ({
  className,
  ...propsRest
}) => {
  return <Button className={cn(style.root_main, className)} {...propsRest} />;
};
