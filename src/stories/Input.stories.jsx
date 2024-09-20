import React from 'react';
import classNames from 'classnames';
import InputGroup from '../components/InputGroup/InputGroup';
import InputLabel from '../components/InputLabel/InputLabel';
import InputText from '../components/InputText/InputText';
import InputAnnotation from '../components/InputAnnotation/InputAnnotation';

import IconBefore from '../assets/icons/icon-before.png';
import IconAfter from '../assets/icons/icon-after.png';

export default {
  title: 'Input Components',
  component: InputGroup,
  argTypes: {
    labelSize: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    state: {
      control: { type: 'select', options: ['default', 'success', 'error'] },
    },
    labelPosition: {
      control: { type: 'radio', options: ['top', 'side'] },
    },
    helperText: { control: 'boolean' },
    label: { control: 'boolean' },
    info: { control: 'boolean' },
    size: {
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    alignment: {
      control: { type: 'radio', options: ['left', 'center', 'right'] },
    },
    iconAfter: { control: 'boolean' },
    iconBefore: { control: 'boolean' },
    readonly: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState('');
  const [showIconBefore, setShowIconBefore] = React.useState(args.iconBefore);
  const [showIconAfter, setShowIconAfter] = React.useState(args.iconAfter);

  React.useEffect(() => {
    setShowIconBefore(args.iconBefore);
    setShowIconAfter(args.iconAfter);
  }, [args.iconBefore, args.iconAfter]);

  const inputClass = classNames({
    [`state-${args.state}`]: args.state,
    [`size-${args.size}`]: args.size,
    [`align-${args.alignment}`]: args.alignment,
  });

  const labelClass = classNames({
    [`size-${args.labelSize}`]: args.labelSize,
  });

  return (
    <InputGroup
      style={{ flexDirection: args.labelPosition === 'side' ? 'row' : 'column' }}
    >
      {args.label && (
        <InputLabel
          label="Email"
          showInfoIcon={args.info}
          className={labelClass}
        />
      )}
      <InputText
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={inputClass}
        readOnly={args.readonly}
        iconBefore={showIconBefore ? <IconBefore /> : null}
        iconAfter={showIconAfter ? <IconAfter /> : null}
      />
      {args.helperText && (
        <InputAnnotation text="This is a hint text to help the user." />
      )}
    </InputGroup>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  labelSize: 'md',
  state: 'default',
  labelPosition: 'top',
  helperText: true,
  label: true,
  info: true,
  size: 'md',
  alignment: 'left',
  iconAfter: true,
  iconBefore: true,
  readonly: false,
};