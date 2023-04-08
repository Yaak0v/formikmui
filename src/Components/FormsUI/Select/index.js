import React from "react";
import { TextField, MenuItem } from "@material-ui/core";
import { useField, useFormik, useFormikContext } from "formik";

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (event) => {
    const { value } = event.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  return <TextField {...configSelect}></TextField>;
};

export default SelectWrapper;
