import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
interface ITextArea {
  name: string;
  label?: string;
  rows?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
}
const FormTextArea = ({ name, label, rows, value, placeholder }: ITextArea) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
