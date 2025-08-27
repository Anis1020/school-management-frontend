import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  defaultValue?: string;
};

const PHInput = ({ type, name, label, defaultValue }: TInputProps) => {
  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name} defaultValue={defaultValue} />
        )}
      />
    </>
  );
};

export default PHInput;
