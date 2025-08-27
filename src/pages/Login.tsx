import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types/auth.types";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { register, handleSubmit } = useForm({
  //   defaultValues: {
  //     userId: "A-0001",
  //     password: "pass123",
  //   },
  // });

  // const defaultValues: {
  //   userId: "A-0001";
  //   password: "pass123";
  // };

  const [login] = useLoginMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("trying to login");
    try {
      const userInfo = {
        id: data.userId,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res?.data?.accessToken) as TUser;
      console.log(user);
      dispatch(setUser({ user, token: res?.data?.accessToken }));
      toast.success("Login successful", { id: toastId });
      // Navigate to the dashboard or another page
      navigate(`/${user?.role}/dashboard`);
    } catch (error) {
      toast.error("Login failed", { id: toastId });
      console.log(error);
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="userId" defaultValue="A-0001" label="ID:" />
        <PHInput
          type="text"
          name="password"
          defaultValue="pass123"
          label="Password:"
        />

        <Button htmlType="submit">Login</Button>
      </PHForm>
    </Row>
  );
};

export default Login;
