import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';

import { MainLayout } from '@/shared/ui/main-layout';

import styles from './index.scss';

const formSchema = z.object({
  currentSugar: z.string(),
  targerSugar: z.string(),
});
type FormValues = z.infer<typeof formSchema>;

const MMOL_L_DECREASE_PER_INSULIN_UNIT = 3;

const calculateInsulinDosage = ({ currentSugar, targerSugar }: FormValues) => {
  const delta = Number(currentSugar) - Number(targerSugar);
  return (delta / MMOL_L_DECREASE_PER_INSULIN_UNIT).toFixed(1);
};

const GlucoseCalcPage: React.FC = () => {
  const currentSugarFieldId = React.useId();
  const targetSugarFieldId = React.useId();
  const insulinDosageFieldId = React.useId();

  const form = useForm({
    defaultValues: {
      currentSugar: '',
      targerSugar: '4.5',
    },
    resolver: zodResolver(formSchema),
  });

  const [currentSugar, targerSugar] = useWatch({
    control: form.control,
    name: ['currentSugar', 'targerSugar'],
  });

  const insulinDosage = calculateInsulinDosage({ currentSugar, targerSugar });

  return (
    <MainLayout lang="ru">
      <title lang="ru">Калькулятор глюкозы</title>
      <div className={styles.root}>
        <div className={styles.header}>
          <h1 className={styles.headline}>Быстрый инсулин</h1>
        </div>

        <div className={styles.form}>
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
              inputMode="numeric"
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
              inputMode="numeric"
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
            <output
              className={styles.formField__output}
              id={insulinDosageFieldId}
            >
              {insulinDosage}
            </output>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GlucoseCalcPage;
