import { Button } from "antd";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { FieldValues } from "react-hook-form";

const CreateSemester = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <PHForm onSubmit={onSubmit}>
      <PHInput type="text" name="name" />
      <Button htmlType="submit">Create Semester</Button>
    </PHForm>
  );
};

export default CreateSemester;
