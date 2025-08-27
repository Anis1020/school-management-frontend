import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPaths } from "./admin.route";
import { routesGenerators } from "../utils/routesGenerators";
import About from "../pages/About";
import { facultyPaths } from "./faculty.route";
import { studentPaths } from "./student.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: routesGenerators(adminPaths),
  },
  {
    path: "/faculty",
    element: <App />,
    children: routesGenerators(facultyPaths),
  },
  {
    path: "/student",
    element: <App />,
    children: routesGenerators(studentPaths),
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
export default router;
