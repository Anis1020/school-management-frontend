import { jwtDecode } from "jwt-decode";

export const verifyToken = (token: string) => {
  if (!token) {
    throw new Error("you are unauthorized");
  }
  const decoded = jwtDecode(token);
  //   const { userId, role } = decoded;
  return decoded;
};
