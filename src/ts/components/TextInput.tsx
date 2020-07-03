import classNames from 'classnames';
import React from 'react';

import { InputModeType } from '@/ts/types.ts';

interface IProps {
  className?: string,
  // TODO: add correct type from @types/react instead of inline
  inputMode: InputModeType,
  legend: string,
  value: string,
  onChange: (evt: React.SyntheticEvent) => void,
}

const TextInput: React.FC<IProps> = (props: IProps) => {
  const {
    className,
    inputMode,
    legend,
    value,
    onChange,
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
};

TextInput.defaultProps = {
  className: '',
};

export default TextInput;
