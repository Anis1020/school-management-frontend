import sidebarItemsGenerator from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.route";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { facultyPaths } from "../../routes/faculty.route";
import { studentPaths } from "../../routes/student.route";
import { useAppSelector } from "../../redux/hooks";

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};
export const Sidebar = () => {
  const user = useAppSelector((state) => state.auth.user);
  // const role = "admin";
  let sidebarItems;
  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, userRole.STUDENT);
      break;
    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div>
        <h3
          style={{
            color: "white",
            textAlign: "center",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          School Management
        </h3>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
