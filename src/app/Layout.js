import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => (
    <div>
        <NavBar />
        <Outlet />  {/* Donde quiero q se carguen las rutas */}
    </div>
)

export default Layout;