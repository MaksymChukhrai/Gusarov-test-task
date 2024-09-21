
import React from 'react';
import InputText from '../components/InputText/InputText';
import InputLabel from '../components/InputLabel/InputLabel';
import InputGroup from '../components/InputGroup/InputGroup';
import InputAnnotation from '../components/InputAnnotation/InputAnnotation';

export default {
  title: 'Components/Input',
  component: InputGroup,
  argTypes: {
    labelSize: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    state: {
      control: { type: 'select', options: ['default', 'hover', 'focus', 'disabled', 'error'] },
    },
    labelPosition: {
      control: { type: 'radio', options: ['top', 'left'] },
    },
    showBorder: {
      control: 'boolean',
    },
    showHelperText: {
      control: 'boolean',
    },
    showLabel: {
      control: 'boolean',
    },
    showInfoIcon: {
      control: 'boolean',
    },
    inputSize: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    alignment: {
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
    showIconBefore: {
      control: 'boolean',
    },
    showIconAfter: {
      control: 'boolean',
    },
    showInputTextIcon: {
      control: 'boolean',
    },
  },
};

const Template = (args) => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <InputGroup style={{ width: '300px' }}>
      {args.showLabel && (
        <InputLabel
          label="Email"
          showInfoIcon={args.showInfoIcon}
          className={args.labelSize}
        />
      )}
      <InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input..."
        iconBeforeLeft={args.showIconBefore ? undefined : null}
        iconAfterLeft={args.showIconAfter ? undefined : null}
        iconAfterRight={args.showInputTextIcon ? undefined : null}
        className={`${args.state} ${args.inputSize} ${args.alignment}`}
        style={{ border: args.showBorder ? undefined : 'none' }}
      />
      {args.showHelperText && <InputAnnotation text="This is a hint text to help user." />}
    </InputGroup>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  labelSize: 'medium',
  state: 'default',
  labelPosition: 'top',
  showBorder: true,
  showHelperText: true,
  showLabel: true,
  showInfoIcon: true,
  inputSize: 'medium',
  alignment: 'left',
  showIconBefore: true,
  showIconAfter: true,
  showInputTextIcon: true,
};