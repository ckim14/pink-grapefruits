import { useState } from "react";
import { TextInput } from "flowbite-react";

function ValidatedTextInput({
  name,
  required,
  value,
  onChange,
  validation,
  validationText,
  type,
}) {
  const [color, setColor] = useState("");
  const [helperText, setHelperText] = useState("");
  const validate = () => {
    if (validation(value)) {
      setColor("");
      setHelperText("");
    } else {
      setColor("failure");
      setHelperText(validationText);
    }
  };
  return (
    <TextInput
      required={required}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={validate}
      color={color}
      type={type}
      helperText={helperText}
    ></TextInput>
  );
}

export default ValidatedTextInput;
