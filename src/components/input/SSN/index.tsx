import { TextField, TextFieldProps } from '@mui/material';
import React, { useState } from 'react';

const SSN_REGEX = /^\d{3}-?\d{2}-?\d{4}$/;

type SSNProps = TextFieldProps;

const SSN: React.FC<SSNProps> = (props) => {
  const [error, setError] = useState<boolean>(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setError(event.target.value.length > 0 && SSN_REGEX.test(event.target.value));

    if (props.onChange) {
      props.onChange(event);
    }
  };

  return (
    <TextField
      {...props}
      error={error}
      onChange={handleChange}
    />
  );
};

export default SSN;
