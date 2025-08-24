import * as React from 'react';

import { cn } from '@/shared/lib/cn';
import { MainLayout } from '@/shared/ui/main-layout';

import styles from './index.module.scss';

const StringerPage: React.FC = () => {
  const [stringToFormat, setStringToFormat] = React.useState('');

  const inputId = React.useId();
  const outputId = React.useId();

  const formattedString = stringToFormat.toLowerCase();

  return (
    <MainLayout>
      <div className={styles.root}>
        <div className={styles.field}>
          <label htmlFor={inputId} className={styles.fieldLabel}>
            Input
          </label>
          <input
            id={inputId}
            className={cn(styles.fieldInput)}
            value={stringToFormat}
            onChange={(event) => {
              setStringToFormat(event.target.value);
            }}
          />
        </div>

        <div className={styles.field}>
          <label htmlFor={outputId} className={styles.fieldLabel}>
            Output: lowercase
          </label>
          <div>
            <input
              id={outputId}
              className={cn(styles.fieldInput)}
              readOnly
              value={formattedString}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StringerPage;
