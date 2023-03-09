import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

// Components
import App from "./components/App";
import * as Page from "./pages";

const routes = [
    {
        path: "/react-page-template/",
        element: <App />,
        errorElement: <Page.ErrorPage />,
        children: [
            {
                index: true,
                element: <Page.Welcome />,
            },
            {
                path: "login",
                element: <Page.Login />,
            },
            {
                path: "register",
                element: <Page.Register />,
            },
        ],
    },
];

export default function RoutesProvider() {
    const router = createBrowserRouter(routes);

    return (
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    );
}
