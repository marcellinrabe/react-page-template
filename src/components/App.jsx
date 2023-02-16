import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Components
import Navbar from "./layouts/Navbar";

// config fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas, fab);


function App() {
    const navigation = useLocation();
    const path = navigation.pathname.substring(1).toLowerCase();
    const notInAuth = path !== "social-network-landing-page/login" && path !== "social-network-landing-page/register";

    return (
        <div aria-label="app">
            { notInAuth && <Navbar /> }
            <Outlet />
        </div>
    );
}

export default App;
