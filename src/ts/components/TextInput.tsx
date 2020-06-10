import classNames from 'classnames';
import React from 'react';

import { InputModeType } from '@/ts/types.ts';

interface IProps {
  className?: string,
  // TODO: add correct type from @types/react instead of inline
  inputMode: InputModeType,
  legend: string,
  onChange: (evt: React.SyntheticEvent) => void,
  value: string,
}

function TextInput(props: IProps): React.ReactNode {
  const {
    className,
    inputMode,
    legend,
    onChange,
    value,
  } = props;

  return (
    <label
      className={classNames('text-input', !!className && className)}
      aria-label={legend}
    >
      <input
        className="s_input text-input__field"
        onChange={onChange}
        type="text"
        inputMode={inputMode}
        value={value}
      />
    </label>
  );
}

TextInput.defaultProps = {
  className: '',
};

export default TextInput;
