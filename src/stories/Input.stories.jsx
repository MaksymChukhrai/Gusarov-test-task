import React from "react";
import InputText from "../components/InputText/InputText";
import InputLabel from "../components/InputLabel/InputLabel";
import InputGroup from "../components/InputGroup/InputGroup";
import InputAnnotation from "../components/InputAnnotation/InputAnnotation";

export default {
  title: "Components/Input",
  component: InputGroup,
  argTypes: {
    state: {
      control: { type: "select" },
      options: ["default", "hover", "focus", "disabled", "error"],
    },
    showBorder: {
      control: "boolean",
    },
    showHelperText: {
      control: "boolean",
    },
    showLabel: {
      control: "boolean",
    },
    showInfoIcon: {
      control: "boolean",
    },
    inputSize: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    alignment: {
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    showIconBefore: {
      control: "boolean",
    },
    showIconAfter: {
      control: "boolean",
    },
    showInputTextIcon: {
      control: "boolean",
    },
  },
};

const Template = (args) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <InputGroup style={{ width: "320px" }}>
      {args.showLabel && (
        <InputLabel
          label="Email"
          showInfoIcon={args.showInfoIcon}
          size={args.inputSize}
        />
      )}
      <InputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Input..."
        iconBeforeLeft={args.showIconBefore ? undefined : null}
        iconAfterLeft={args.showIconAfter ? undefined : null}
        iconAfterRight={args.showInputTextIcon ? undefined : null}
        size={args.inputSize}
        alignment={args.alignment}
        state={args.state}
        showBorder={args.showBorder}
      />
      {args.showHelperText && (
        <InputAnnotation text="This is a hint text to help user." />
      )}
    </InputGroup>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  state: "default",
  showBorder: true,
  showHelperText: true,
  showLabel: true,
  showInfoIcon: true,
  inputSize: "small",
  alignment: "left",
  showIconBefore: true,
  showIconAfter: true,
  showInputTextIcon: true,
};
