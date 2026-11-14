import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { MainLayout } from '@/shared/ui/main-layout';

import styles from './index.scss';

const formSchema = z.object({
  currentSugar: z.string(),
  targerSugar: z.string().default('4.5'),
  insulinDosage: z.string(),
});

const GlucoseCalcPage: React.FC = () => {
  const currentSugarFieldId = React.useId();
  const targetSugarFieldId = React.useId();
  const insulinDosageFieldId = React.useId();

  const form = useForm({
    defaultValues: {
      currentSugar: '',
      targerSugar: '4.5',
      insulinDosage: '',
    },
    resolver: zodResolver(formSchema),
  });

  return (
    <MainLayout lang="ru">
      <title lang="ru">Калькулятор глюкозы</title>
      <div className={styles.root}>
        <div className={styles.header}>
          <h1 className={styles.headline}>Калькулятор глюкозы</h1>
        </div>

        <form className={styles.form}>
          <div className={styles.formField}>
            <label
              className={styles.formField__label}
              htmlFor={currentSugarFieldId}
            >
              Сахар сейчас, ммоль/л
            </label>
            <input
              className={styles.formField__input}
              type="text"
              id={currentSugarFieldId}
              {...form.register('currentSugar')}
            />
          </div>

          <div className={styles.formField}>
            <label
              className={styles.formField__label}
              htmlFor={targetSugarFieldId}
            >
              Целевой сахар, ммоль/л
            </label>
            <input
              className={styles.formField__input}
              type="text"
              id={targetSugarFieldId}
              {...form.register('targerSugar')}
            />
          </div>

          <hr className={styles.form__separator} />

          <div className={styles.formField}>
            <label
              className={styles.formField__label}
              htmlFor={insulinDosageFieldId}
            >
              Сколько единиц нужно уколоть
            </label>
            <input
              className={styles.formField__input}
              type="text"
              id={insulinDosageFieldId}
              readOnly
              {...form.register('insulinDosage')}
            />
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default GlucoseCalcPage;
