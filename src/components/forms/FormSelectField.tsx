"use client";

import { Select } from "antd";

import { Controller, useFormContext } from "react-hook-form";

type SelectOptions = {
  label: string;
  value: string;
};
type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  label?: string;
  placeholder?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  defaultValue?: SelectOptions;
};
const FormSelectField = ({
  name,
  label,
  placeholder,
  size,
  value,
  options,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select style={{
            width:"100%"
          }} onChange={onChange} options={options} value={value} size={size} placeholder={placeholder} defaultValue={defaultValue} />
        )}
      />
    </>
  );
};

export default FormSelectField;
